import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const readingTime = (body = '') => {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

export const formatDate = (d: Date | string) =>
  new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

/** All published posts, newest first. */
export const getPublishedPosts = async () => {
  const posts = await getCollection('blog');
  return posts.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );
};

/** Build a table of contents from markdown ## / ### headings. */
export const buildToc = (body = '') => {
  const lines = body.split('\n');
  const toc: { depth: number; text: string; slug: string }[] = [];
  for (const line of lines) {
    const m = /^(#{2,3})\s+(.*)$/.exec(line.trim());
    if (!m) continue;
    const text = m[2].replace(/[*_`]/g, '').trim();
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    toc.push({ depth: m[1].length, text, slug });
  }
  return toc;
};
