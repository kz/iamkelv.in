import { getBlogLinksMetadata, getBlogPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';

// 404 when an unsupported slug is visited.
export const dynamicParams = false;

export async function generateStaticParams() {
  const metadata = await getBlogLinksMetadata({ postsOnly: true });
  return metadata.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { metadata, content } = await getBlogPostBySlug(params.slug);

  return (
    <div className='prose prose-lg'>
      <MDXRemote source={content} />
    </div>
  );
}
