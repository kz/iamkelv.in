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

  const inlineCodeStyles = [
    ':rounded-lg',
    ':border',
    ':border-solid',
    ':border-slate-300',
    ':bg-slate-100',
    ':px-2',
    ':py-1',
    ':text-sm',
    ':font-normal',
    // Remove backticks from inline code.
    ':before:content-none',
    ':after:content-none',
  ]
    .map((style) => `[&_:not(pre)>code]${style}`)
    .join(' ');

  return (
    <div className={'prose prose-lg ' + inlineCodeStyles}>
      <Markdown content={content} />
    </div>
  );
}
