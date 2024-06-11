import { UserConfig } from 'vite';

const isProduction = process.env.NODE_ENV === 'production';

const config: UserConfig = {
  root: 'src',
  build: {
    outDir: '../dist',
    ...(isProduction ? {} : { logLevel: 'info' }) // Установка уровня логирования только в режиме разработки
  },
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: ['console'],
  }
};

export default config;
