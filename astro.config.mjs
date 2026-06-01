import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ironhive.fitness',
  integrations: [
    sitemap({
      customPages: [
        'https://ironhive.fitness/',
        'https://ironhive.fitness/membership/',
        'https://ironhive.fitness/contact/',
        'https://ironhive.fitness/blog/',
        'https://ironhive.fitness/gym-in-gomti-nagar-lucknow/',
        'https://ironhive.fitness/personal-training-gomti-nagar/',
        'https://ironhive.fitness/weight-loss-program-lucknow/',
      ],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
