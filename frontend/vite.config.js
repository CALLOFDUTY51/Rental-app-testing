import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      apiUrl: process.env.VITE_API_URL, // Define your custom environment variable
    },
  };
});
