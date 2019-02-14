const withTypescript = require('@zeit/next-typescript');
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
});
const withCSS = require('@zeit/next-css');

module.exports = withTypescript(
  withCSS(
    withMDX({
      pageExtensions: ['js', 'jsx', 'mdx'],
    })
  )
);
