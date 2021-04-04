
module.exports = {
  devServer: {
    open: true, // 是否自动打开浏览器页面
    port: 8080, // 端口地址
    https: false, // 使用https提供服务
    // proxy: 'https://nykj.91160.com', // string | Object 代理设置
    proxy: {
        '/sys/*': {
            target: 'https://wap.91160.com',
            changeOrigin: true,
            secure: false
        }
    }
},
  lintOnSave: false,
  productionSourceMap: true
}