import React from 'react';
import './ShapeGrid.css';

function changeColor() {
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

const ColorGrid = () => (

  <div className="color-container">
    <div id="color-row">
      <button id="swatch1" className="pots" style={{backgroundColor: '#EFE2AB'}}></button>
      <button id="swatch2" className="pots" style={{backgroundColor: '#E27B67'}}></button>
      <button id="swatch3" className="pots" style={{backgroundColor: '#915249'}}></button>
      <button id="swatch4" className="pots" style={{backgroundColor: '#6E4870'}}></button>
      <button id="swatch5" className="pots" style={{backgroundColor: '#B785BA'}}></button>
      <button id="swatch6" className="pots" style={{backgroundColor: '#405865'}}></button>
      <button id="swatch7" className="pots" style={{backgroundColor: '#8EB5B5'}}></button>
      <button id="swatch8" className="pots" style={{backgroundColor: '#437048'}}></button>
      <button id="swatch9" className="pots" style={{backgroundColor: '#60965E'}}></button>
    </div>
  </div>
)

export default ColorGrid;