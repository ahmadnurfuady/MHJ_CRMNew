import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

type PostCssDeclaration = {
  prop: string;
  value: string;
  parent?: { selector?: string };
};

const iconSelectorPattern =
  /(?:\.|#)(?:fa\b|fa-|fas\b|far\b|fab\b|icon\b|icon-|icofont\b|icofont-|solar-icon\b|mhj-icon\b|spinner\b|loader\b)|::?(?:before|after)|\bsvg\b/i;

/** Menambahkan offset aksesibilitas pada setiap deklarasi ukuran teks hasil build. */
const globalFontSizeOffsetPlugin = {
  postcssPlugin: "mhj-global-font-size-offset",
  Declaration(declaration: PostCssDeclaration) {
    if (declaration.prop.toLowerCase() !== "font-size") return;

    const value = declaration.value.trim();
    const selector = declaration.parent?.selector ?? "";
    if (
      !value ||
      value === "0" ||
      value.includes("--app-font-size-offset") ||
      iconSelectorPattern.test(selector) ||
      /^(?:inherit|initial|unset|revert|revert-layer|medium|xx-small|x-small|small|large|x-large|xx-large|xxx-large|smaller|larger)$/i.test(value) ||
      !/(?:\d|(?:calc|clamp|min|max|var)\()/i.test(value)
    ) {
      return;
    }

    declaration.value = `calc(${value} + var(--app-font-size-offset, 2px))`;
  },
};

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
  css: {
    postcss: {
      plugins: [globalFontSizeOffsetPlugin],
    },
  },
  build: {
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 3000,
  },
}));
