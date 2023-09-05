// Import the 'defineConfig' function from the 'vite' package
import { defineConfig } from "vite";

// Import the 'react' plugin from the '@vitejs/plugin-react' package
import react from "@vitejs/plugin-react";

// Import the 'eslint' plugin from the 'vite-plugin-eslint' package
import eslint from "vite-plugin-eslint";

// Configuration object for Vite
export default defineConfig({
  // Specify the plugins to use
  plugins: [react(), eslint()],
});

