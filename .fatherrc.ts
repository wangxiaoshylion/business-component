export default {
  esm: 'rollup',
  cjs: 'rollup',
  runtimeHelpers: true,
  cssModules: { generateScopedName: '[local]___[hash:base64:5]' },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  lessInRollupMode: {
    globalVars: {},
  },
};
