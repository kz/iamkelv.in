/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://iamkelv.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // Generate into the final static export, after Next.js has copied public/.
  outDir: 'out',
  exclude: ['/conversations-sync', '/conversations-sync/**'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: '/conversations-sync' }],
  },
};
