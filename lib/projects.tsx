import assert from 'assert';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';

const projectsPath = path.join(process.cwd(), 'content/projects');

interface PostLink {
  url: string;
  text: string;
}

export interface Project {
  name: string;
  slug: string;
  languages: string;
  dates: string;
  links: PostLink[];
  content: string;
}

export async function getProjects(): Promise<Project[]> {
  const paths = sync(`${projectsPath}/*.md`);

  return paths
    .map((path) => {
      const source = fs.readFileSync(path, 'utf8');
      const { data, content } = matter(source);

      const links = data.links.map((link: any) => ({
        url: link.url,
        text: link.text,
      }));

      return {
        name: data.name,
        slug: path,
        languages: data.languages,
        dates: data.dates,
        links: links,
        content: content,
      };
    })
    .sort((a, b) => {
      if (a.slug < b.slug) return 1;
      if (a.slug > b.slug) return -1;
      return 0;
    });
}
