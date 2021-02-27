const path = require('path'),
        HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map', // 打包时如果出现了问题 定位到源码
    resolve: {
        modules: [path.resolve(__dirname, ''), path.resolve(__dirname, 'node_modules')], // 告诉webpack解析模块时应该搜索的目录
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}