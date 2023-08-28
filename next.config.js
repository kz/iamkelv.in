import remarkFormatter from 'remark-frontmatter';
import remarkMdxFormatter from 'remark-mdx-frontmatter';
import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFormatter, remarkMdxFormatter],
  },
});
export default withMDX(nextConfig);
