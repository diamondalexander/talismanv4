import React from 'react';
// import BottomNav from '../components/BottomNav';
import BlobShape from '../components/BlobShape';
import ColorGrid from '../components/ColorGrid';

function showGrid() {
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

const BottomNav = (props) => (
  <div className="nav-container">
    <div className="icons-container" id={props.id}>
      <div className="icon">
        <a href={props.icon1link}>
          {props.icon1}
          <p>{props.icon1label}</p>
        </a>
      </div>
      <div className="icon" onClick={showGrid}>
          <img src={require('../images/color-active.svg')} alt="filled color svg" />
          <p>{props.icon2label}</p>
      </div>
      <div className="icon">
        <a href={props.icon3link}>
          {props.icon3}
          <p>{props.icon3label}</p>
        </a>
      </div>
    </div>
  </div>
)

const Color = () => (
  <div className="app">
    <BlobShape />

    <BottomNav 
      id="ci-controls" 
      icon1= {<img src={require('../images/shape.svg')} alt="circle icon for shape options" />}
      icon2= {<img src={require('../images/color.svg')} alt="color drop icon for color options" />}
      icon3= {<img src={require('../images/sticker.svg')} alt="sticker icon for sticker options"/>}
      icon1link="/shape"
      icon3link="/sticker"
    />


    {/* <BottomNav
      id="ci-controls" 
      icon1= {<img src={require('../images/shape.svg')} alt="circle icon for shape options" />}
      icon2= {<img src={require('../images/color.svg')} alt="color drop icon for color options" />}
      icon3= {<img src={require('../images/sticker.svg')} alt="sticker icon for sticker options"/>}
      icon1link="/shape"
      icon2link="/color"
      icon3link="/sticker"
    /> */}

    <div id="grid">
      <ColorGrid />
    </div>
  </div>
)

export default Color