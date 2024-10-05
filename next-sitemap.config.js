const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://picwise.co/' ;
module.exports = {
    siteUrl: baseUrl, 
    generateRobotsTxt: true, 
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
};