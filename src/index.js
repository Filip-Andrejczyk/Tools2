import _ from 'lodash';
import "./main.scss";
import html from "./index.html"; //potrzebne to?
//import 'bootstrap';

function component() {
    const element = document.createElement('div');
  
    // Lodash, imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
document.body.appendChild(component());