import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

console.log("vite is loading ")

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Impact-Employer-Dashboard/",
  server: {
    port: 5173,
  },
});