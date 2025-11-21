import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".",
  publicDir: "public",
  build: {
    outDir: "build",
    // rollupOptions: {
    //   input: "index.html", // Vite sabrá que index.html es la entrada
    // },
  },
});
