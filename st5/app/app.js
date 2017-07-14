//引入angular
var angular = require('angular');
//定义一个angular模块
var ngModule = angular.module('app', []);
//引入指令文件
require('./helloWorld/helloWorld.js')(ngModule);
//引入样式文件
require('./css/style.css');