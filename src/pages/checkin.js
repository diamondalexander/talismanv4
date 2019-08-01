import React from 'react';
import BottomNav from '../components/BottomNav';
import BlobShape from '../components/BlobShape';
import ColorGrid from '../components/ColorGrid';
import '../components/Checkin.css';


function showShapes() {
  var grid = document.getElementById('grid');
  grid.classList.toggle('hidden');

  var swatches = document.getElementsByClassName('pots');
  for (var i = 0; i < swatches.length; i++) {    
      swatches[i].addEventListener('click', ((j) => {         
      return function() {
        var color = swatches[j].style.backgroundColor;
        console.log(color);
        document.getElementById('mood').style.fill = color;
      }
    })(i))
  }
}

function showColors() {
  var grid = document.getElementById('grid');
  grid.classList.toggle('hidden');

  var swatches = document.getElementsByClassName('pots');
  for (var i = 0; i < swatches.length; i++) {    
      swatches[i].addEventListener('click', ((j) => {         
      return function() {
        var color = swatches[j].style.backgroundColor;
        console.log(color);
        document.getElementById('mood').style.fill = color;
      }
    })(i))
  }
}



const Checkin = () => (
  <div className="app">
    <div className="overlay">
      <div className="start-content">
        <h1>Create your first check-in!</h1>
        <button id="start">Press to start</button>
      </div>
      </div>
    <BlobShape />

    <BottomNav
        id="ci-controls" 
        icon1= {<img src={require('../images/shape-active.svg')} alt="circle icon for shape options" />}
        icon2= {<img src={require('../images/color.svg')} alt="color drop icon for color options" />}
        icon3= {<img src={require('../images/sticker.svg')} alt="sticker icon for sticker options"/>}
        icon1link="/shape"
        icon2link="/color"
        icon3link="/sticker"
      />
  </div>
)


export default Checkin;
