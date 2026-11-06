// Animations à fond transparent : WebKit (Safari, et tous les navigateurs sur
// iPhone/iPad) ne gère la transparence qu'en HEVC ; les autres navigateurs en WebM VP9.
const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
const isIOS = /iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1);
const useHevc = isIOS || /^((?!chrome|chromium|android|edg|firefox).)*safari/i.test(ua);

export const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Donne sa source à la vidéo au premier besoin (preload="none" : rien n'est téléchargé avant). */
export function ensureSource(v: HTMLVideoElement) {
  if (!v.src) v.src = useHevc ? v.dataset.mov! : v.dataset.webm!;
}

export function play(v: HTMLVideoElement) {
  ensureSource(v);
  // Safari iOS n'autorise la lecture automatique que d'une vidéo muette et intégrée à la page
  v.muted = true;
  v.playsInline = true;
  v.play().catch(() => {});
}
