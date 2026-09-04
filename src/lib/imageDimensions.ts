import sharp from 'sharp';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const cache = new Map<string, { width: number; height: number } | null>();

// Resolves a public-relative image path (e.g. "/assets/foo.jpg") to its
// intrinsic pixel dimensions, reading the file from `public/` at build time.
// Returns null if the file can't be found or read (e.g. remote URLs).
export async function getImageDimensions(src: string | undefined): Promise<{ width: number; height: number } | null> {
	if (!src || !src.startsWith('/')) return null;
	if (cache.has(src)) return cache.get(src)!;

	const filePath = join(process.cwd(), 'public', src);
	if (!existsSync(filePath)) {
		cache.set(src, null);
		return null;
	}

	try {
		const { width, height } = await sharp(filePath).metadata();
		const result = width && height ? { width, height } : null;
		cache.set(src, result);
		return result;
	} catch {
		cache.set(src, null);
		return null;
	}
}
