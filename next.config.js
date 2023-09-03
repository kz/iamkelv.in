import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkFormatter from 'remark-frontmatter';
import remarkMdxFormatter from 'remark-mdx-frontmatter';
import remarkRehype from 'remark-rehype';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  experimental: {
    mdxRs: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFormatter, remarkMdxFormatter, remarkRehype],
    rehypePlugins: [rehypePrism],
  },
});
export default withMDX(nextConfig);
