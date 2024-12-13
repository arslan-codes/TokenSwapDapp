import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Forward all requests starting with /api to your backend
      "/api": "http://localhost:5173/",

      // Forward 0x API requests to its endpoint (replace with the actual URL if needed)
      "/0x-api": "https://api.0x.org", // Add this if you want to proxy 0x API
    },
    hmr: true,
    watch: {
      usePolling: true, // Enables polling for file changes on Linux
      interval: 1000, // Optional: Adjust the polling interval as needed
    },
  },
});
