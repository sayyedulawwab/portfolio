import type { APIRoute } from 'astro';
import { site } from '../data/info';

export const GET: APIRoute = ({ site: configuredSite }) => {
  const base = configuredSite ?? new URL(site.url);

  const body = `User-agent: *
Allow: /
Disallow: /thanks/

Sitemap: ${new URL('sitemap-index.xml', base).href}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
