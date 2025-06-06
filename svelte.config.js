import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      out: 'dist', // Output directory for static files
      precompress: false, // Optional: Set to true if you want compressed files (e.g., .gz)
      fallback: 'index.html' // For SPA routing (if needed)
    }),
    paths: {
      base: '' // Adjust if you’re hosting in a subdirectory
    }
  }
};

export default config;