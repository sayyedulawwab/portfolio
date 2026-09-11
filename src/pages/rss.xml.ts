import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPosts } from '../lib/posts';
import { site } from '../data/info';

export const GET: APIRoute = async context => {
  const posts = await getPosts();

  return rss({
    title: `${site.name} — writing`,
    description:
      'Articles on software architecture, system design, performance and production .NET systems.',
    site: context.site ?? site.url,
    trailingSlash: true,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.metaDescription,
      pubDate: post.data.publishedOn,
      link: `/blog/${post.id}/`,
      categories: [...post.data.tags],
    })),
    customData: '<language>en-us</language>',
  });
};
