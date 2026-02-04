import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Target modern browsers for smaller bundle
  build: {
    cssCodeSplit: true,
    // Enable minification
    minify: 'esbuild',
    // Target modern browsers for smaller bundle
    target: 'esnext',
    // Better tree-shaking
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split node_modules into separate chunks
          if (id.includes('node_modules')) {
            // React core libraries (always needed, keep together)
            if (id.includes('react') && !id.includes('react-router') && !id.includes('react-dom')) {
              return 'react-core';
            }
            // React DOM (always needed with React)
            if (id.includes('react-dom')) {
              return 'react-core';
            }
            // React Router (can be loaded separately, split out)
            if (id.includes('react-router')) {
              return 'react-router';
            }
            // Lucide icons (large library, split separately for better tree-shaking)
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            // Utility libraries (small, can be bundled together)
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'utils';
            }
            // Other vendor libraries
            return 'vendor';
          }
        },
        // Optimize chunk names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Improve tree-shaking
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
