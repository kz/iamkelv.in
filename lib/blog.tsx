import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';

const postsPath = path.join(process.cwd(), 'content/blog');

export interface PostMetadata {
  title: string;
  slug: string;
  created: Date;
  updated: Date;
  excerpt: string;
}

function matterToPostMetadata(data: any): PostMetadata {
  return {
    title: data.title,
    slug: data.slug,
    created: data.created,
    updated: data.updated,
    excerpt: data.excerpt,
  };
}

export async function getPostsMetadata() {
  const paths = sync(`${postsPath}/*.mdx`);

  return paths.map((path) => {
    const source = fs.readFileSync(path);
    const { data } = matter(source);
    return matterToPostMetadata(data);
  });
}
