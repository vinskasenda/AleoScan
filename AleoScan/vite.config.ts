import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

const root = resolve(__dirname, "src");
const icon = resolve(__dirname, "src/assets/icon");
const img = resolve(__dirname, "src/assets/imgs/");



// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  resolve: {
    alias: {
      "@src": root,
      "@icon": icon,
      "@image": img,
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  plugins: [react()],
})


