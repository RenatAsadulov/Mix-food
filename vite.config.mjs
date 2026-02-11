import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@/sections": fileURLToPath(new URL("./src/sections", import.meta.url)),
    },
  },
  base: "/",
  build: { outDir: "dist", emptyOutDir: true },
});
