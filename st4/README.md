# WebpackStudy-st4
>2017.7.13
学习热加载文件

## 知识记录
### 1.export default
使用export default的模块，在另外一个模块import调用的时候，可以不用查看其名称，可以自定义其名称
```
import library from './library'
```


## 配置文件
### 1.开启HMR
>webpack.config.js中开启HMR

```
plugins: [
    new webpack.HotModuleReplacementPlugin() //enable HMR
],
```
### 2.配置css编译规则
>webpack.config.js中配置

```
module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
},
```

## 参考资料

 - 1.export相关：http://es6.ruanyifeng.com/#docs/module#export-default-%E5%91%BD%E4%BB%A4