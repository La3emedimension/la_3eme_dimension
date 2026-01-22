import { getCollection } from 'astro:content';
import type { Locale } from '../i18n';

export async function getLocalizedCollection(
  collection: 'blog',
  locale: Locale
) {
  const entries = await getCollection(collection);
  return entries.filter(entry => entry.id.startsWith(`${locale}/`));
}

export async function getLocalizedDataCollection(
  collection: 'products' | 'builds',
  locale: Locale
) {
  const entries = await getCollection(collection);
  return entries.filter(entry => entry.id.startsWith(`${locale}/`));
}

export function getSlugWithoutLocale(id: string, locale: Locale): string {
  const prefix = `${locale}/`;
  const withoutPrefix = id.startsWith(prefix) ? id.slice(prefix.length) : id;
  return withoutPrefix.replace(/\.(md|json)$/, '');
}
