import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  esbuild: {
    minify: true
  },
  build: {
    target: 'esnext',
    minify: false,
    lib: {
      entry: "src/index.tsx",
      name: "react-music-player",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
