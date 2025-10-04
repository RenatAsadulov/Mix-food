import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

console.log("hello");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components"),
      "@/sections": path.resolve(__dirname, "src/sections"),
    },
  },
  base: process.env.NODE_ENV === "production" ? "/" : "/", // обязательно для GitHub Pages
  build: { outDir: "dist", emptyOutDir: true },
});
