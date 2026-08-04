import { MetadataRoute } from 'next';
import { ROUTES } from '@/data/routes';
import { VEHICLES } from '@/data/vehicles';
import { BLOG_POSTS } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rawahel-juman.com';

  const staticPages = [
    '',
    '/routes',
    '/vehicles',
    '/reviews',
    '/blog',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const routePages = ROUTES.map((r) => ({
    url: `${baseUrl}/routes/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const vehiclePages = VEHICLES.map((v) => ({
    url: `${baseUrl}/vehicles/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const blogPages = BLOG_POSTS.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticPages, ...routePages, ...vehiclePages, ...blogPages];
}
