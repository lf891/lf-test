module.exports = {
  // Github Pages
  publicPath: process.env.NODE_ENV === 'production'
    ? '/lf-test/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '@/assets/styles/common/_variables.scss';`
      }
    }
  },
}
