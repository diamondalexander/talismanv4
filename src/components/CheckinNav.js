import React from 'react';
import './BottomNav.css';


function showShapes() {
  var shapeGrid = document.getElementById('shape-grid');
  shapeGrid.classList.toggle('hidden');

  var shapes = document.getElementsByClassName('svgs');
  for (var i = 0; i < shapes.length; i++) {    
      shapes[i].addEventListener('click', ((j) => {         
      return function() {
        var paths = shapes[j].children[0].getAttribute('d');
        var changeSVG = document.getElementById('blob-shape').children[0];
        changeSVG.setAttribute('d', paths);
        // document.getElementById('blob-shape').innerHTML = paths;
      }
    })(i))
  }
}

function showColors() {
  var grid = document.getElementById('color-grid');
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

function showStickers() {
  var grid = document.getElementById('sticker-grid');
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


const CheckinNav = (props) => (
  <div className="nav-container">
    <div className="icons-container" id="ci-controls">
      <div className="icon" onClick={showShapes} id="shape">
        <img src={require('../images/shape.svg')} alt="circle icon for shape options" />
      </div>
      <div className="icon" onClick={showColors} id="color">
        <img src={require('../images/color.svg')} alt="color drop icon for color options" />
      </div>
      <div className="icon" onClick={showStickers} id="sticker">
        <img src={require('../images/sticker.svg')} alt="sticker icon for sticker options"/>
      </div>
    </div>
  </div>
)

export default CheckinNav;