import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';

const postsPath = path.join(process.cwd(), 'content/blog');

export interface PostMetadata {
  type: 'internal';
  title: string;
  slug: string;
  created: Date;
  updated: Date;
  excerpt: string;
}

export interface ExternalMetadata {
  type: 'external';
  title: string;
  // Slug is used as a unique identifier.
  slug: string;
  link: string;
  created: Date;
}

export type BlogMetadata = PostMetadata | ExternalMetadata;

function matterToMetadata(data: any): BlogMetadata {
  if (data.type === 'external') {
    return {
      type: 'external',
      title: data.title,
      slug: data.slug,
      link: data.link,
      created: data.created,
    };
  } else {
    return {
      type: 'internal',
      title: data.title,
      slug: data.slug,
      created: data.created,
      updated: data.updated,
      excerpt: data.excerpt,
    };
  }
}

export async function getBlogLinksMetadata() {
  const paths = sync(`${postsPath}/*.mdx`);

  return paths.map((path) => {
    const source = fs.readFileSync(path);
    const { data } = matter(source);
    return matterToMetadata(data);
  });
}
