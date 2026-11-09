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
  v.pause();
  v.hidden = true;
  const img = document.createElement('img');
  img.className = 'anim-image';
  img.src = v.dataset.webp!;
  img.alt = v.getAttribute('aria-label') ?? '';
  v.after(img);
  box.dispatchEvent(new CustomEvent('anim-fallback'));
}

export function play(v: HTMLVideoElement) {
  if (boxOf(v)?.dataset.fallback) return;
  ensureSource(v);
  // Safari iOS n'autorise la lecture automatique que d'une vidéo muette et intégrée à la page
  v.muted = true;
  v.playsInline = true;
  const attempt = String(Date.now());
  v.dataset.wantPlay = attempt;
  v.play().catch((err: DOMException) => {
    if (err?.name === 'NotAllowedError') useImageFallback(v);
  });
  // Certains navigateurs ne rejettent pas la lecture : ils la laissent simplement à l'arrêt,
  // parfois sans même télécharger la vidéo (Firefox sur iPhone, sans action du visiteur)
  const started = Date.now();
  const check = () => {
    if (v.dataset.wantPlay !== attempt || !v.paused) return;
    // Téléchargement encore en cours sur une connexion lente : on patiente, dans la limite de 15 s
    const downloading = v.readyState < 2 && v.networkState === HTMLMediaElement.NETWORK_LOADING;
    if (downloading && Date.now() - started < 15000) setTimeout(check, 2000);
    else useImageFallback(v);
  };
  setTimeout(check, BLOCKED_AFTER_MS);
}

/** Toute mise en pause voulue passe par ici, pour ne pas être prise pour un blocage. */
export function pause(v: HTMLVideoElement) {
  delete v.dataset.wantPlay;
  v.pause();
}
