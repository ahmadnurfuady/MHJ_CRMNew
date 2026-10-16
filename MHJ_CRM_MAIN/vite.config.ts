import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: "/",
  // devtools hanya saat dev, tidak ikut build production
  plugins: [vue(), ...(command === "serve" ? [vueDevTools()] : [])],
  resolve: {
    extensions: ['.ts', '.vue', '.js', '.mjs', '.tsx', '.jsx', '.json'],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  build: {
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 3000,
  },
}));
