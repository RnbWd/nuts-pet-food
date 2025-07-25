import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    cssMinify: "lightningcss",
    outDir: "../dist",
    emptyOutDir: true,
  },
  css: {
    transformer: "lightningcss",
  },
  plugins: [tailwindcss()],
  root: "src",
  server: {
    open: "/index.html",
  },
});
