import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from '@svgr/rollup';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      // Options for SVGR plugin
    }),
    checker({
      typescript: true, // Enable TypeScript checker
    }),
    // Unfonts({ src:'./src/assets/fonts/*.ttf' , preLoad: true, preFetch: false, injectTo: 'head-prepend',})
  ]  
});
