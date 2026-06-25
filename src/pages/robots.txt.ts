import type { APIRoute } from 'astro';

// Generowane z `site` w astro.config.mjs — adres sitemapy zawsze pasuje do domeny.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site ?? 'https://zaskoki.pl/').href;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
