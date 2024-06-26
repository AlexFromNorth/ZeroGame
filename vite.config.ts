import { UserConfig } from 'vite';

// const isProduction = process.env.NODE_ENV === 'production';

const config: UserConfig = {
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: ['console'],
  },
  logLevel: 'info'
};

export default config;
