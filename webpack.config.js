const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js',
      publicPath: '/'
   },
   devServer: {
      inline: true,
      port: 3000,
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.js|\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['@babel/preset-react']
            }
         },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
         test: /\.(svg|woff|woff2|ttf|eot|otf)([\?]?.*)$/,
         loader: 'file-loader?name=assets/fonts/[name].[ext]',
    }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}