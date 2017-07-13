# WebpackStudy-st3
>2017.7.13
学习watch，用来对项目文件进行监听，如有变化会重新执行编译
学习webpack服务器插件，实现热更新，如有变化自动编译，浏览器自动刷新

## 依赖包安装
### 1.安装serve
`cnpm install --save-dev serve`
安装后可以建立一个服务器

### 2.安装webpack-dev-server
`cnpm install --save-dev webpack-dev-server`
安装后可以建立一个热更新服务器，当文件修改保存后，可以在命令行中看到自动编译，然后页面也会自动刷新

## 相关操作
### 1.进行watch(由于没有全局安装，所以使用下面这种方式)
`node-module/.bin/webpack --progress --watch`
实现了项目的修改监听和自动编译

### 2.配置serve命令脚本
>在webpack.config.js中进行安装配置

```
"script" : {
    "start": "serve"
}
//这个项目由于结构问题，改用
"script":{
    "start": "cd st3 && serve"
}
```
运行 `cnpm start`命令，可以建立一个服务器，其中包含了`st3`中的文件

### 3.配置sourcemap
>在webpack.config.js中加入,单独成一个配置，就是和output等并列写入

`devtool: "cheap-eval-source-map" `
cheap-module-source-map 不包含列信息，同时 loader 的 sourcemap 也被简化为只包含对应行的。最终的 sourcemap 只有一份，它是 webpack 对 loader 生成的 sourcemap 进行简化，然后再次生成的。

### 4.配置webpack-dev-server
```
"script":{
    "start": "cd st3 && webpack-dev-server"
}
```

## 相关资料

 - 1.webpack sourcemap相关介绍资料：https://segmentfault.com/a/1190000004280859

