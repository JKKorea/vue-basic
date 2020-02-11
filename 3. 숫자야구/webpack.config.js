const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  // devtool: 'hidden-source-map', 운영환경에서 사용.
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: { // module이 webpack의 핵심
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',

    }],
  },
  plugins: [
      new VueLoaderPlugin(),
  ],
  output: {
    // filename: 'app.js' // 종합해서 app.js라는 이름으로 파일을 합쳐줌.
    filename: '[name].js', // 이렇게 해도 entry의 app을 보고 위와 같이 만들어줌.
    path: path.join(__dirname, 'dist'),
  },

}