import { MetadataRoute } from 'next';
import { ROUTES } from '@/data/routes';
import { VEHICLES } from '@/data/vehicles';
import { BLOG_POSTS } from '@/data/blog';
import { SITE_URL } from '@/lib/jsonld';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/routes',
    '/vehicles',
    '/faq',
    '/reviews',
    '/blog',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const routePages = ROUTES.map((r) => ({
    url: `${SITE_URL}/routes/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const vehiclePages = VEHICLES.map((v) => ({
    url: `${SITE_URL}/vehicles/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const blogPages = BLOG_POSTS.map((b) => ({
    url: `${SITE_URL}/blog/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticPages, ...routePages, ...vehiclePages, ...blogPages];
}
