import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

const isPublished = (post: Post) =>
  import.meta.env.DEV || (!post.data.draft && post.data.publishedOn <= new Date());

/** Published posts, newest first. Drafts and future posts are visible in dev only. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog');
  return posts
    .filter(isPublished)
    .sort(
      (a, b) => b.data.publishedOn.getTime() - a.data.publishedOn.getTime()
    );
}

export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const posts = await getPosts();
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export const tagSlug = (tag: string) =>
  tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/** Locale is pinned so prerendered output does not depend on the build machine. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const isoDate = (date: Date) => date.toISOString().split('T')[0];

/** Rough reading time. 200 wpm is the usual convention for technical prose. */
export function readingTime(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
