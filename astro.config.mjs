export default defineConfig({
  site: 'https://solar.websolutiontx.com',

  base: '/', // ✅ ADD THIS (VERY IMPORTANT)

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
