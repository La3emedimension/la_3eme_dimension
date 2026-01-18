import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  const frenchPosts = blog
    .filter(post => post.id.startsWith('fr/') && !post.data.draft)
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  return rss({
    title: 'La 3ème dimension',
    description: "Site de la 3ème dimension pour fabriquer et concevoir des objets en 3D imprimés",
    site: context.site,
    items: frenchPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      link: `/blog/${post.id.replace('fr/', '').replace(/\.md$/, '')}/`,
    })),
    customData: `<language>fr-FR</language>`,
  });
}