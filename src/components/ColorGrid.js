import React from 'react';
import './ColorGrid.css';

function changeOne() {
  var swatch1= document.getElementById('swatch1').style.backgroundColor;
  document.getElementById('mood').style.fill = swatch1;
}

  function changeTwo() {
    var swatch2= document.getElementById('swatch2').style.backgroundColor;
    document.getElementById('mood').style.fill = swatch2;
  }
  function changeThree() {
    var swatch3= document.getElementById('swatch3').style.backgroundColor;
    document.getElementById('mood').style.fill = swatch3;
  }
  function changeFour() {
    var swatch4= document.getElementById('swatch4').style.backgroundColor;
    document.getElementById('mood').style.fill = swatch4;
  }
  function changeFive() {
    var swatch5= document.getElementById('swatch5').style.backgroundColor;
    document.getElementById('mood').style.fill = swatch5;
  }
  function changeSix() {
    var swatch6= document.getElementById('swatch6').style.backgroundColor;
    document.getElementById('mood').style.fill = swatch6;
  }
  function changeSeven() {
    var swatch7= document.getElementById('swatch7').style.backgroundColor;
    document.getElementById('mood').style.fill = swatch7;
  }
  function changeEight() {
    var swatch8= document.getElementById('swatch8').style.backgroundColor;
    document.getElementById('mood').style.fill = swatch8;
  }
  function changeNine() {
    var swatch9= document.getElementById('swatch9').style.backgroundColor;
    document.getElementById('mood').style.fill = swatch9;
  }


// function changeColor() {
//   var swatches = document.getElementsByClassName('pots');
//   var 
// }


const ColorGrid = () => (
  <div className="color-container">
    <div className="color-row">
      <button id="swatch1" className="pots" style={{backgroundColor: '#EFE2AB'}} onClick={changeOne}></button>
      <button id="swatch2" className="pots" style={{backgroundColor: '#E27B67'}} onClick={changeTwo}></button>
      <button id="swatch3" className="pots" style={{backgroundColor: '#915249'}} onClick={changeThree}></button>
      <button id="swatch4" className="pots" style={{backgroundColor: '#6E4870'}} onClick={changeFour}></button>
      <button id="swatch5" className="pots" style={{backgroundColor: '#B785BA'}} onClick={changeFive}></button>
      <button id="swatch6" className="pots" style={{backgroundColor: '#405865'}} onClick={changeSix}></button>
      <button id="swatch7" className="pots" style={{backgroundColor: '#8EB5B5'}} onClick={changeSeven}></button>
      <button id="swatch8" className="pots" style={{backgroundColor: '#437048'}} onClick={changeEight}></button>
      <button id="swatch9" className="pots" style={{backgroundColor: '#60965E'}} onClick={changeNine}></button>
    </div>
  </div>
)

export default ColorGrid;