import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import Markdown from '@/components/Markdown';

export default function Home() {
  const aboutPath = path.join(process.cwd(), 'content/about.md');
  const content = fs.readFileSync(aboutPath, 'utf8');

  return (
    <main>
      <div className='mb-4 flex justify-center'>
        <Image
          src='/assets/profile.jpg'
          alt='Photo of Kelvin Zhang'
          width={200}
          height={200}
          className='rounded-full'
        />
      </div>
      <div className='prose prose-lg'>
        <Markdown content={content} />
      </div>
    </main>
  );
}
