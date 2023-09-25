import Markdown from '@/components/Markdown';
import { getProjects } from '@/lib/projects';
import path from 'path';
import fs from 'fs';
import { Metadata } from 'next';
import { openGraphDefaults, twitterDefaults } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Projects - Kelvin Zhang',
  openGraph: {
    ...openGraphDefaults,
    title: 'Projects - Kelvin Zhang',
  },
  twitter: {
    ...twitterDefaults,
    title: 'Projects - Kelvin Zhang',
  },
};

export default async function Projects() {
  const projectsIntroPath = path.join(
    process.cwd(),
    'content/projects-intro.md'
  );
  const projectsIntro = fs.readFileSync(projectsIntroPath, 'utf8');
  const projects = await getProjects();

  return (
    <main>
      <section className='prose prose-lg mb-8'>
        <Markdown content={projectsIntro} />
      </section>
      <hr className='mb-8' />
      <section>
        <ul>
          {projects.map((project) => {
            return (
              <li key={project.slug} className='mb-8 last:mb-0'>
                <div>
                  <span className='block text-xl font-semibold lg:mr-1.5 lg:inline-block'>
                    {project.name}
                  </span>
                  <span className='text-lg text-slate-500'>
                    {project.languages}
                  </span>
                </div>
                <div className='mb-1 text-lg text-slate-500'>
                  {project.dates}
                </div>
                <div className='prose prose-lg mb-1'>
                  <Markdown content={project.content} />
                </div>
                {project.links.map((link, index) => {
                  return (
                    <div key={link.url} className='inline'>
                      <a
                        href={link.url}
                        className='inline-block text-lg text-blue-500 hover:underline'
                        target='_blank'
                      >
                        {link.text}
                      </a>
                      {index < project.links.length - 1 && <span> | </span>}
                    </div>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
