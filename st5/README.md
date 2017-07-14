# WebpackStudy-st4
>2017.7.14
学习webpack与angular1.x的结合开发

## 相关依赖

 - "angular": "^1.6.5",
 - "clean-webpack-plugin": "^0.1.16",
 - "css-loader": "^0.28.4",
 - "open-browser-webpack-plugin": "^0.0.5",
 - "style-loader": "^0.18.2",
 - "webpack-dev-server": "^2.5.1",
 - "webpack": "^3.2.0",

## 知识记录

1. 入口文件`app.js`
引入angularjs依赖，定义一个angular模块，将helloWord组件引入，以及将css样式引入。

2. helloWorld组件
创建一个自定义组件，可以通过`<hello-world></hello-world>`引入
templateUrl指向html文件

## 问题
1. 在`helloWorld.js`文件中，directive配置中的templateUrl路径配置，为什么要`app/helloWorld/helloWorld.html`,而不能直接用`helloWorld.html`

## 参考资料
1. https://segmentfault.com/a/1190000009360285
