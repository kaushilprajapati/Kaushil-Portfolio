import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base ('./') so the built site works on GitHub Pages under
// any path — https://user.github.io/<repo>/ or a custom domain — with
// no config changes. This is a single-page (hash-anchored) site, so
// relative asset URLs resolve correctly everywhere.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
})
