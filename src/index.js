import _ from 'lodash';
import "./main.scss";
import html from "./index.html"; //potrzebne to?
//import 'bootstrap';
/// <reference path="../typings/tsd.d.ts" />
//import './style.css';
import Ksiek from './assets/pan-krzysztof.jpg';
import Major from './assets/pan-major.jpg';
import siema from './assets/siema.jpg';


function component()
{
    const element = document.createElement('div');
  
    // Lodash, imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
}

var liczniczek = 0;
$(function () {
  function zamienobrazki() {
      liczniczek++;

      if($('#ksiek').prop('src') == Ksiek)
      {
        if($('#theImg').prop('src') == siema){
          if($("#tlo").hasClass("obrazki--hide")){
            $('#tlo').removeClass("obrazki--hide");
            $('#tlo').addClass("obrazki--hidesiema");
          }
        }
        $('#ksiek').attr('src', Major);
        $('#major').attr('src', Ksiek);
        $('.licznik').html('Licznik Borzy: '+ liczniczek);
      }
      else if($('#ksiek').prop('src') == Major)
      {
        if($('#theImg').prop('src') == siema){
          if($("#tlo").hasClass("obrazki--hide")){
            $('#tlo').removeClass("obrazki--hide");
            $('#tlo').addClass("obrazki--hidesiema");
          }
        }
        $('#ksiek').attr('src', Ksiek);
        $('#major').attr('src', Major);
        $('.licznik').html('Licznik Borzy: '+ liczniczek);
      }
      if(liczniczek == 3){
        $('.licznik').html('iiiiiii??');
        $('#tlo').prepend($('<img>',{id:'theImg',src: siema}))
        $('#tlo').addClass("obrazki--hide");
      }
      else if(liczniczek == 7){
        $('.licznik').html('iiiiiii??');
        $('#tlo').addClass("obrazki--hide");
        $('#tlo').removeClass("obrazki--hidesiema");
      }
  }
  $("#przycisk").on("click", zamienobrazki);
});

document.body.appendChild(component());