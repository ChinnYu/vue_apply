module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: 'http://m.maoyan.com',
        // ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  },
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 範本來源
      template: 'public/index.html',
      // 在 dist/index.html 的輸出
      filename: 'index.html',
      // 當使用 title 選項時，
      // template 中的 title 標籤需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在這個頁面中包含的塊，預設情況下會包含
      // 提取出來的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // 當使用只有入口的字串格式時，
    // 範本會被推導為 `public/subpage.html`
    // 並且如果找不到的話，就回退到 `public/index.html`。
    // 輸出檔案名會被推導為 `subpage.html`。
    // cyl: {
    //     // page 的入口
    //     entry: 'src/cyl.js',
    //     // 範本來源
    //     template: 'public/cyl.html',
    // }

  }
}
