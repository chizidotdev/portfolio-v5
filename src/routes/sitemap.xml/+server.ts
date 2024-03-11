import type { PageLoad } from '../$types';

const pages = ['', 'snippets'];

export const GET: PageLoad = async ({ fetch, url }) => {
	console.log(url);
	const res = await fetch('/api/snippets');
	let snippets: Snippet[] = await res.json();

	const body = sitemap(url.origin, snippets, pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
};

const sitemap = (
	website: string,
	snippets: Snippet[],
	pages: string[]
) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${website}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages
		.map(
			(page) => `
    <url>
      <loc>${website}/${page}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
  `
		)
		.join('')}

  ${snippets
		.map(
			(post) => `
    <url>
      <loc>${website}/snippets/${post.slug}</loc>
      <changefreq>weekly</changefreq>
      <lastmod>${post.date}</lastmod>
      <priority>0.3</priority>
    </url>
  `
		)
		.join('')}
</urlset>`;
