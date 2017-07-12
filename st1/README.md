# WebpackStudy-st1
>2017.7.12 
主要学习静态文件，如js，css，以及图片文件的处理。

## 依赖包安装
1.webpack安装
`cnpm install --save-dev webpack`

2.lodash依赖安装
>这是一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库

`cnpm install --save lodash`


3.插件依赖安装
>css-loader&style-loader css文件处理，csv-loader excel文件处理，xml-loader xml文件处理，file-loader 普通文件处理

`cnpm install --save-dev css-loader csv-loader xml-loader style-loader file-loader`

## 目录详细
```
st1
|- package.json //npm配置文件
|- webpack.config.js //webpack配置文件
|- /dist //生成文件保存目录
  |- bundle.js
  |- index.html
|- /src //主文件目录
  |- index.js
|- /node_modules //依赖文件目录
```


