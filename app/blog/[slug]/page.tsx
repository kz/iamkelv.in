import Markdown from '@/components/Markdown';
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
    <div className='prose prose-lg [&_:not(pre)>code]:rounded-lg [&_:not(pre)>code]:border [&_:not(pre)>code]:border-solid [&_:not(pre)>code]:border-slate-300 [&_:not(pre)>code]:bg-slate-100 [&_:not(pre)>code]:px-2 [&_:not(pre)>code]:py-1 [&_:not(pre)>code]:text-sm [&_:not(pre)>code]:font-normal [&_:not(pre)>code]:before:content-none [&_:not(pre)>code]:after:content-none'>
      <Markdown content={content} />
    </div>
  );
}
