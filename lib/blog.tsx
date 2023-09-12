import assert from 'assert';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';

const postsPath = path.join(process.cwd(), 'content/blog');

export interface Post {
  metadata: PostMetadata;
  content: string;
}

export interface PostMetadata {
  type: 'internal';
  sourceFilepath: string;
  title: string;
  slug: string;
  created: Date;
  updated: Date;
  excerpt: string;
}

export interface ExternalMetadata {
  type: 'external';
  sourceFilepath: string;
  title: string;
  // Slug is used as a unique identifier.
  slug: string;
  link: string;
  created: Date;
}

export type BlogMetadata = PostMetadata | ExternalMetadata;

function matterToMetadata(path: string, data: any): BlogMetadata {
  if (data.type === 'external') {
    return {
      type: 'external',
      sourceFilepath: path,
      title: data.title,
      slug: data.slug,
      link: data.link,
      created: data.created,
    };
  } else {
    return {
      type: 'internal',
      sourceFilepath: path,
      title: data.title,
      slug: data.slug,
      created: data.created,
      updated: data.updated,
      excerpt: data.excerpt,
    };
  }
}

export async function getBlogLinksMetadata({
  postsOnly = false,
}: { postsOnly?: boolean } = {}) {
  const paths = sync(`${postsPath}/*.md`);

  return paths
    .map((path) => {
      const source = fs.readFileSync(path, 'utf8');
      const { data } = matter(source);
      return matterToMetadata(path, data);
    })
    .filter((metadata) => !postsOnly || metadata.type === 'internal');
}

export async function getBlogPostBySlug(slug: string): Promise<Post> {
  // Since getBlogPostBySlug is called for each blog post generation, each blog
  // MDX file is read n^2 times, where n is the number of files. This is not
  // efficient, but is fine since this blog is generated statically.
  const postsMetadata = await getBlogLinksMetadata({ postsOnly: true });
  const metadata = postsMetadata.find((metadata) => metadata.slug === slug);
  assert(metadata !== undefined);
  assert(metadata.type === 'internal');

  const source = fs.readFileSync(metadata.sourceFilepath);
  const { content } = matter(source);
  return { metadata, content };
}
