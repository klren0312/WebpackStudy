# WebpackStudy-st7
>2017.7.16
webpack命令行操作

## 命令解析
```
..\node_modules\.bin\webpack hello.js bundle.js --module-bind 'css=style-loader!css-lo
ader' --progress --display-modules --display-reasons  --watch
```

 - --module-bind 绑定一些loader
 - --progress 显示打包过程
 - --display-modules 显示所有打包的模块
 - --display-reasons 显示打包原因
 - --watch 自动监视和更新
