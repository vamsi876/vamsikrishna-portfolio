import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/' : '/',
  server: {
    host: true,
    port: 8082,
    strictPort: true,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('/three/')) return 'vendor-three';
          if (id.includes('/framer-motion/')) return 'vendor-motion';
          if (id.includes('/langchain') || id.includes('/@langchain/')) return 'vendor-langchain';
          if (id.includes('/react-pdf/') || id.includes('/pdfjs-dist/')) return 'vendor-pdf';
          if (id.includes('/recharts/') || id.includes('/d3-')) return 'vendor-charts';
          if (id.includes('/react-dom/') || id.includes('/react/') || id.includes('/react-router')) return 'vendor-react';
          if (id.includes('/@radix-ui/')) return 'vendor-radix';
        },
      },
    },
  }
}));
