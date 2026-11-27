import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [react(), RubyPlugin()],
  css: {
    postcss: {},
  },
  server: {
    host: '0.0.0.0',
    port: 3036,
    strictPort: true,
    hmr: {
      host: '127.0.0.1',
      port: 3036,
      clientPort: 3036,
      protocol: 'ws',
    },
    allowedHosts: ['localhost', '127.0.0.1'],
    cors: {
      origin: 'http://localhost:3000',
    },
  },
})
