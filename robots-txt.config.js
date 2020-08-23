module.exports = {
  policy: [
    {
      userAgent: 'Googlebot',
      allow: '/',
      disallow: ['/search', '/admin', '/dashboard', '/login'],
      crawlDelay: 1,
    },
    {
      userAgent: 'OtherBot',
      allow: '/',
      disallow: ['/search', '/admin', '/dashboard', '/login'],
      crawlDelay: 2,
    },
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/search', '/admin', '/dashboard', '/login'],
      crawlDelay: 10,
      cleanParam: 'ref /articles/',
    },
  ],
  sitemap: 'http://freighttrust.com/sitemap.xml',
  host: 'http://freighttrust.com',
};
