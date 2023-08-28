import { getPostsMetadata } from '@/lib/blog';
import dayjs from 'dayjs';
import Link from 'next/link';

function toDateString(date: Date) {
  return dayjs(date).format('MMM YYYY');
}

export default async function Page() {
  const posts = await getPostsMetadata();

  posts
    .map((post) => post)
    .sort((a, b) => {
      if (a.created > b.created) return 1;
      if (a.created < b.created) return -1;

      return 0;
    });

  return (
    <section>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug} className='mb-2 md:flex md:justify-between'>
              <Link
                href={`/blog/${post.slug}`}
                className='text-lg text-blue-600'
              >
                {post.title}
              </Link>
              <div className='text-md whitespace-nowrap font-normal text-gray-500'>
                {toDateString(post.created)}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
