import Markdown from '@/components/Markdown';
import { getBlogLinksMetadata, getBlogPostBySlug } from '@/lib/blog';

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
    'rounded-lg',
    'border',
    'border-solid',
    'border-slate-300',
    'bg-slate-100',
    'px-2',
    'py-1',
    'text-sm',
    'font-normal',
    'before:content-none',
    'after:content-none',
  ]
    .map((style) => `[&_:not(pre)>code]:${style}`)
    .join(' ');

  const headingStyles = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    .map((heading) =>
      ['bg-slate-400'].map((s) => `[&_${heading}>a]:${s}`).join(' ')
    )
    .join(' ');

  return (
    <div className={`prose prose-lg ${inlineCodeStyles} ${headingStyles}`}>
      <Markdown content={content} />
    </div>
  );
}
