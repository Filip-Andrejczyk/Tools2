import _ from 'lodash';
import "./main.scss";
import html from "./index.html"; //potrzebne to?
//import 'bootstrap';
/// <reference path="../typings/tsd.d.ts" />
//import './style.css';
import Ksiek from './assets/pan-krzysztof.jpg';
import Major from './assets/pan-major.jpg';


function component()
{
    const element = document.createElement('div');
  
    // Lodash, imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
}

$(function () {
  function zamienobrazki() {
    if($('#ksiek').prop('src') == Ksiek){
      $('#ksiek').attr('src', Major);
      $('#major').attr('src', Ksiek);
    }
    else{
      $('#ksiek').attr('src', Ksiek);
      $('#major').attr('src', Major);
    }
  }
  $("#przycisk").on("click", zamienobrazki);
});



  
document.body.appendChild(component());