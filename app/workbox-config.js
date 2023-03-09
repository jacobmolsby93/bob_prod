module.exports = {
  swDest: 'dist/service-worker.js',
  swSrc: 'src/sw.js', 
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{html,json,js,css}',
    'images/**/*.{jpg,jpeg,png,webp,svg,gif}'
  ]
};