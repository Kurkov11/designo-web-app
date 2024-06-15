import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allows access from local network
    port: 5173, // Ensure the port is open and accessible
  },
  build: {
    assetsInlineLimit: 0,
  },
});
