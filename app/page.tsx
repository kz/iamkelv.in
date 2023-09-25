import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import Markdown from '@/components/Markdown';
import Link from 'next/link';
import Footer from '@/components/Footer';

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
      <div className='prose prose-lg mb-4'>
        <Markdown content={content} />
      </div>
      <div className='mb-5'>
        <Link
          href='/blog'
          className='text-lg text-blue-500 hover:text-blue-600 hover:underline'
        >
          Now read the blog →
        </Link>
      </div>
      <Footer />
    </main>
  );
}
