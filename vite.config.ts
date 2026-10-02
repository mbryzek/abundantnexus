/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      adapter: adapter({
        pages: 'build',
        assets: 'build',
        fallback: undefined,
        precompress: false,
        strict: true
      }),
      prerender: {
        handleHttpError: ({ path, message }) => {
          // Ignore 404s for speaker pages that haven't been populated yet
          if (path.startsWith('/speakers/') && message.includes('404')) {
            return;
          }
          throw new Error(message);
        }
      }
    })
  ],
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'node'
  }
});
