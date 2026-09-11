import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sayyedulawwab.com',
  output: 'static',
  adapter: netlify(),
  trailingSlash: 'always',
  build: { format: 'directory' },

  integrations: [
    sitemap({
      filter: page => !page.includes('/thanks'),
    }),
  ],

  image: {
    // AVIF/WebP via sharp. Requires the pnpm-workspace fix below.
    responsiveStyles: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
