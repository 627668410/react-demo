const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy,
} = require('customize-cra');
const path = require('path');

// override生成webpack配置对象
module.exports = override(
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
  }),
  fixBabelImports('import', {
    // antd按需加载
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addDecoratorsLegacy() // 配置装饰器
);
