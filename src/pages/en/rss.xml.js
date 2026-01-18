import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  const englishPosts = blog
    .filter(post => post.id.startsWith('en/') && !post.data.draft)
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  return rss({
    title: 'La 3ème dimension (English)',
    description: "3D printing design, modeling and workshop services",
    site: context.site,
    items: englishPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      link: `/en/blog/${post.id.replace('en/', '').replace(/\.md$/, '')}/`,
    })),
    customData: `<language>en-GB</language>`,
  });
}
