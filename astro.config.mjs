import { unified } from '@astrojs/markdown-remark';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';


import partytown from '@astrojs/partytown';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sayyedulawwab.com',

  integrations: [
    react(),
    sitemap({
      changefreq: 'daily',
      priority: 0.9,
      lastmod: new Date(),
      serialize: ({ url }) => {
        // Customize specific URLs to remove trailing slashes
        if (url === 'https://sayyedulawwab.com/') {
          return { url: 'https://sayyedulawwab.com' };
        }
        if (url === 'https://sayyedulawwab.com/blog/') {
          return { url: 'https://sayyedulawwab.com/blog' };
        }
        // Keep other URLs unchanged
        return { url };
      },
    }),
    partytown({
      // Example: Disable debug mode.
      config: { debug: false },
      forward: ['dataLayer.push'],
    }),
  ],

  markdown: {
    processor: unified(),
  },

  output: 'server',
  adapter: netlify(),

  content: {
    collections: {
      blog: {
        schema: {
          type: 'json',
        },
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});