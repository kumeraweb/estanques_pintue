export async function get() {
  const pages = ['', '/catalogo', '/contacto']

  const urls = pages
    .map((path) => {
      return `<url>
        <loc>https://www.estanquespintue.cl${path}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
    })
    .join('')

  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`
  }
}
