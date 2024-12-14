import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://sayyedulawwab.com',
  integrations: [
    tailwind(),
    react(),
    sitemap({}),
    partytown({
      // Example: Disable debug mode.
      config: { debug: false },
      forward: ['dataLayer.push'],
    }),
  ],
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
});
