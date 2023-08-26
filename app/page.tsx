import About from '@/content/about.mdx';
import Image from 'next/image';

export default function Home() {
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
        <About />
      </div>
    </main>
  );
}
