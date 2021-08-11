import { defineConfig } from 'dumi';

export default defineConfig({
  title: '@wxshylion/business-component',
  favicon: '/wx/images/logo.png',
  logo: '/wx/images/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  publicPath: '/wx/',
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  resolve: {
    includes: ['docs'],
  },
  chainWebpack(config) {
    config.merge({
      optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.(css|less)$/,
              chunks: 'async',
              minChunks: 2,
              minSize: 0,
            },
            vendors: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
              chunks: 'all',
              minSize: 30000,
              minChunks: 3,
              automaticNameDelimiter: '.',
            },
          },
        },
      },
    });
  },
  theme: {
    '@theme-color': '#3367d6',
    // body 背景色
    '@body-background': '#f7f7f7',
    // 主色; 链接色
    '@primary-color': '#3367d6',
    // 主体文字大小
    '@font-size-base': '12px',
    // 常规文字
    '@text-color': '#000',
    // 次级文字
    '@text-color-secondary': '#666',
    '@text-color-third': '#666',
    '@border-color': '#e7e7e7',
    // 失效文字
    '@disabled-color': '#bfbfbf',
    // 表格表头背景色
    '@table-header-bg': '#dce7ff',
    // Tabs padding
    '@tabs-horizontal-padding': '14px 4px',
    '@success-color': '#52c41a',
    '@warning-color': '#faad14',
    '@error-color': '#f5222d',
    '@card-padding-base': '12px',
    '@card-head-padding': '12px',
    '@card-shadow': '0px 1px 17px 4px rgba(0; 0; 0; 0.2)',
  },
});
