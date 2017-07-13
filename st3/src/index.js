import _ from 'lodash';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var inputbox = document.createElement('input');
    var checkbox = document.createElement('input');
    var radio = document.createElement('input');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    inputbox.type = 'number';
    checkbox.type = 'checkbox';
    radio.type = 'radio';
    element.appendChild(inputbox);
    element.appendChild(btn);
    element.appendChild(checkbox);
    element.appendChild(radio);

    return element;
}

document.body.appendChild(component());