// https://github.com/arackaf/customize-cra/blob/master/api.md
const { override, useBabelRc, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@src': path.resolve(__dirname, 'src'),
  }),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc()
);
