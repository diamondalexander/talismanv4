import React from 'react';
import './BottomNav.css';


function showShapes() {
  var shapeGrid = document.getElementById('shape-grid');
  shapeGrid.classList.toggle('hidden');

  var shapes = document.getElementsByClassName('shape');
  // var svg = document.getElementById('mood').getAttribute('d');
  for (var i = 0; i < shapes.length; i++) {    
      shapes[i].addEventListener('click', ((j) => {         
      return function() {
        var paths = shapes[j].getAttribute('d');
        console.log(paths);
        // document.getElementById('mood').style.fill = color;
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
      <div className="icon" onClick={showShapes}>
        <img src={require('../images/shape.svg')} alt="circle icon for shape options" />
      </div>
      <div className="icon" onClick={showColors}>
        <img src={require('../images/color.svg')} alt="color drop icon for color options" />
      </div>
      <div className="icon" onClick={showStickers}>
        <img src={require('../images/sticker.svg')} alt="sticker icon for sticker options"/>
      </div>
    </div>
  </div>
)

export default CheckinNav;