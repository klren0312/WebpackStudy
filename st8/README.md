# WebpackStudy-st8
>2017.7.16
webpack配置文件相关

## 具体看注释
```
    output: {
        path: path.resolve(__dirname, 'dist/js'), //生成文件保存的地址
        filename: '[name].[hash].bundle.js',
        // publicPath:'http://www.zzes1314.cn ' 配置生产环境
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html', //让生成目录下的index.html内容与根目录下index.html一致
            title: "my first webpack title",
            inject: false, //自动将文件插入index.html
            date: new Date(),
            minify: {
                removeComments: true, //删除注释
                collapseWhitespace: true //删除空格
            }
        })
    ]
```