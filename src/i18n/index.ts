import { fr } from './translations/fr';
import { en } from './translations/en';
import type { Locale, Translations } from './types';

export type { Locale, Translations };

const translations: Record<Locale, Translations> = { fr, en };

export function useTranslations(locale: Locale | undefined): Translations {
  return translations[locale ?? 'fr'];
}

export function localePath(path: string, locale: Locale | undefined): string {
  const l = locale ?? 'fr';
  if (l === 'fr') return path;
  return `/en${path.startsWith('/') ? path : '/' + path}`;
}

export function getLocaleFromPath(path: string): Locale {
  return path.startsWith('/en/') || path === '/en' ? 'en' : 'fr';
}

export function stripLocaleFromSlug(slug: string, locale: Locale): string {
  const prefix = `${locale}/`;
  return slug.startsWith(prefix) ? slug.slice(prefix.length) : slug;
}

export function getAlternatePath(currentPath: string, currentLocale: Locale): string {
  if (currentLocale === 'fr') {
    return `/en${currentPath}`;
  }
  return currentPath.replace(/^\/en/, '') || '/';
}
