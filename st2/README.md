# WebpackStudy-st2
>2017.7.12(未完成) 2017.7.13
学习输出文件的配置

## 依赖包安装
1.安装`html-webpack-plugin`
`cnpm install --save-dev html-webpack-plugin`
进行相关html文件的操作，比如更改内容，自动将设置的bundle加入到html等

2.安装`clean-webpack-plugin`
`cnpm install --save-dev clean-webpack-plugin`
进行相关清理工作，比如清理输出文件夹（/dist）

## 配置文件
在plugin里加入
```
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "Output Management klrentest"
        })
    ],
```
