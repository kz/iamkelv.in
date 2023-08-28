import { BlogMetadata, getBlogLinksMetadata } from '@/lib/blog';
import dayjs from 'dayjs';
import Link from 'next/link';
import { IoMdOpen } from 'react-icons/io';

function toDateString(date: Date) {
  return dayjs(date).format('MMM YYYY');
}

const BlogLink = (metadata: BlogMetadata) => {
  if (metadata.type === 'external') {
    return (
      // flex is needed to get the icon on the same line as the title.
      <a
        href={metadata.link}
        target='_blank'
        className='text-lg text-blue-600 hover:underline'
      >
        {metadata.title}{' '}
        <span className='inline-block text-gray-400'>
          <IoMdOpen size='16' />
        </span>
      </a>
    );
  } else {
    return (
      <Link
        href={`/blog/${metadata.slug}`}
        className='text-lg text-blue-600 hover:underline'
      >
        {metadata.title}
      </Link>
    );
  }
};

export default async function Page() {
  const blogLinks = await getBlogLinksMetadata();

  blogLinks
    .map((post) => post)
    .sort((a, b) => {
      if (a.created > b.created) return 1;
      if (a.created < b.created) return -1;

      return 0;
    });

  return (
    <section>
      <ul>
        {blogLinks.map((blogLink) => {
          return (
            <li key={blogLink.slug} className='mb-2 md:flex md:justify-between'>
              {BlogLink(blogLink)}
              <div className='text-md whitespace-nowrap font-normal text-gray-500'>
                {toDateString(blogLink.created)}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
