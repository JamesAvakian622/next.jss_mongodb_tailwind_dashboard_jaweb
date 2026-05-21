import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
//
// We expose both VITE_* and NEXT_PUBLIC_* env vars so the same .env.local can
// be shared between this Vite app and any sibling Next.js project.
//
// manualChunks splits the heaviest vendors into their own files so they
// (a) don't trip the 500 KB warning and (b) cache independently from app code.
export default defineConfig({
  plugins: [react()],
  envPrefix: ["VITE_", "NEXT_PUBLIC_"],
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          clerk: ["@clerk/clerk-react"],
          convex: ["convex/react", "convex/react-clerk"],
          apexcharts: ["apexcharts", "react-apexcharts"],
          jsvectormap: ["jsvectormap"],
        },
      },
    },
  },
});
