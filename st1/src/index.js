import _ from 'lodash';
import './style.css';
// import Pic from './pic.png';
import Data from './data.xml'

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图片加入已存在的div中
    // var myIcon = new Image();
    // myIcon.src = Pic;

    // element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());