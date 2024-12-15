import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/0x-api": {
        target: "https://api.0x.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/0x-api/, ""), // Remove `/0x-api` from the path
      },
    },
    hmr: true,
    watch: {
      usePolling: true, // Enables polling for file changes on Linux
      interval: 1000, // Optional: Adjust the polling interval as needed
    },
  },
});
