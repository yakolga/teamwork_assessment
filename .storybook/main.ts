const { mergeConfig } = require('vite');
const { resolve } = require('path');
const vue = require('@vitejs/plugin-vue').default;

const appDir = resolve(__dirname, '..', 'app');

module.exports = {
  stories: [
    '../app/components/**/*.stories.@(js|ts|mdx)',
    '../stories/**/*.stories.@(js|ts|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  async viteFinal(viteConfig) {
    const merged = mergeConfig(viteConfig, {
      resolve: {
        alias: {
          '@': appDir,
          '~': appDir,
          '~assets': resolve(appDir, 'assets')
        }
      },
      plugins: [
        vue(),
      ],
      optimizeDeps: {
        include: ['vue']
      }
    });
    return merged;
  }
};