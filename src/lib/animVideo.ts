// Animations à fond transparent : WebKit (Safari, et tous les navigateurs sur
// iPhone/iPad) ne gère la transparence qu'en HEVC ; les autres navigateurs en WebM VP9.
// Si le navigateur refuse la lecture automatique (Firefox sur iPhone, par exemple),
// l'animation est remplacée par la même en image WebP animée, qui démarre toujours seule.
const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
const isIOS = /iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1);
const useHevc = isIOS || /^((?!chrome|chromium|android|edg|firefox).)*safari/i.test(ua);

// Délai au-delà duquel une vidéo prête mais toujours à l'arrêt est considérée comme bloquée
const BLOCKED_AFTER_MS = 4000;

export const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

const boxOf = (v: HTMLVideoElement) => v.closest<HTMLElement>('[data-anim-video]');

/** Donne sa source à la vidéo au premier besoin (preload="none" : rien n'est téléchargé avant). */
export function ensureSource(v: HTMLVideoElement) {
  if (!v.src) v.src = useHevc ? v.dataset.mov! : v.dataset.webm!;
}

/** Remplace la vidéo par l'image WebP animée équivalente. */
export function useImageFallback(v: HTMLVideoElement) {
  const box = boxOf(v);
  if (!box || box.dataset.fallback) return;
  box.dataset.fallback = '1';
  pending.delete(v);
  v.pause();
  v.hidden = true;
  const img = document.createElement('img');
  img.className = 'anim-image';
  img.src = v.dataset.webp!;
  img.alt = v.getAttribute('aria-label') ?? '';
  v.after(img);
  box.dispatchEvent(new CustomEvent('anim-fallback'));
}

// Vidéos dont la lecture a été demandée sans avoir encore démarré. Sur iPhone, la première
// animation d'un lecteur est lancée par le défilement, sans action du visiteur : Safari peut la
// laisser en attente sans rien télécharger (cadre vide). Le premier toucher la relance.
const pending = new Set<HTMLVideoElement>();
let unlockListening = false;
const unlock = () => {
  pending.forEach((v) => {
    if (v.dataset.wantPlay && v.paused && !boxOf(v)?.dataset.fallback) v.play().catch(() => {});
  });
};
const listenForUnlock = () => {
  if (unlockListening) return;
  unlockListening = true;
  for (const type of ['touchend', 'click', 'keydown']) {
    addEventListener(type, unlock, { capture: true, passive: true });
  }
};

export function play(v: HTMLVideoElement) {
  if (boxOf(v)?.dataset.fallback) return;
  ensureSource(v);
  // Safari iOS n'autorise la lecture automatique que d'une vidéo muette et intégrée à la page
  v.muted = true;
  v.playsInline = true;
  const attempt = String(Date.now());
  v.dataset.wantPlay = attempt;
  pending.add(v);
  listenForUnlock();
  v.addEventListener('playing', () => pending.delete(v), { once: true });
  v.play().catch((err: DOMException) => {
    if (err?.name === 'NotAllowedError') useImageFallback(v);
  });
  // Certains navigateurs ne rejettent pas la lecture : ils la laissent simplement à l'arrêt,
  // parfois sans même télécharger la vidéo (Firefox sur iPhone, sans action du visiteur)
  const started = Date.now();
  const check = () => {
    if (v.dataset.wantPlay !== attempt || !v.paused) return;
    // Téléchargement réellement commencé (dimensions et durée déjà reçues) sur une connexion
    // lente : on patiente, dans la limite de 15 s. Rien reçu du tout après 4 s : la lecture est
    // bloquée (Safari sur iPhone peut afficher « chargement » sans jamais rien demander).
    const downloading = v.readyState === HTMLMediaElement.HAVE_METADATA && v.networkState === HTMLMediaElement.NETWORK_LOADING;
    if (downloading && Date.now() - started < 15000) setTimeout(check, 2000);
    else useImageFallback(v);
  };
  setTimeout(check, BLOCKED_AFTER_MS);
}

/** Toute mise en pause voulue passe par ici, pour ne pas être prise pour un blocage. */
export function pause(v: HTMLVideoElement) {
  delete v.dataset.wantPlay;
  pending.delete(v);
  v.pause();
}
