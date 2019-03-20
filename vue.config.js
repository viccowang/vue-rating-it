module.exports = {
  configureWebpack: {
      output: {
          library: "VueRatingIt",
          libraryExport: 'default'
      },
  },
  css: {
      extract: false
  }
}