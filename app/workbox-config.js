// webpack.config.js
module.exports = {
  entry : {
    sw: './src/sw.js'
  }, 
  output: {
    filename: 'sw.js'
  },
  target: 'webworker',
  plugins: [
    new InjectManifestPlugin()
  ]
}