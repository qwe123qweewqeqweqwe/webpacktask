const path = require("path")

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: "./src/main.js", // 入口
    output: { 
        path: path.join(__dirname, "dist"), // 出口路径
        filename: "bundle.js" // 出口文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
          }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 3000, // 端口号
        open: true
      }
}