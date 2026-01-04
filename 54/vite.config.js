import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,        // <---- Your new default port
    strictPort: true,  // Optional: prevents switching if port is busy
  },
});
