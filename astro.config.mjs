// astro.config.ts
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 1. Point the site to your new custom domain
  site: 'https://solar.websolutiontx.com',
  
  // 2. DO NOT include a `base` property here anymore (remove it if it exists)
  
  trailingSlash: 'ignore',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    alpinejs({ entrypoint: '/src/entrypoints/alpine.js' }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },
});
