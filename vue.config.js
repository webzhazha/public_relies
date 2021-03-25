
module.exports = {
  configureWebpack: (config)=>{
    config.module.rules.push({
      test: /\.scss$/,
      loader: ['style-loader', 'node-sass', 'sass-loder']
    })
  }
}