import React from 'react';
import BlobShape from '../components/BlobShape';
import ShapeGrid from '../components/ShapeGrid';
import ColorGrid from '../components/ColorGrid';
import StickerGrid from '../components/StickerGrid';
import '../components/Checkin.css';
import CheckinNav from '../components/CheckinNav';
import canvg from 'canvg';

function initFunctions() {
  var overlay = document.getElementById('overlay');
  overlay.classList.add('hidden');
  var pickShape = document.getElementById('pick-shape');
  pickShape.classList.toggle('hidden');
}

function colorClose(){
  var colorGrid = document.getElementById('color-grid');
  colorGrid.classList.toggle('hidden');
  var showPickSticker = document.getElementById('pick-sticker');
  showPickSticker.classList.toggle('hidden');
  var svgPath = document.getElementById('blob-shape').outerHTML;
  console.log(svgPath);
  document.getElementById('svg-container').classList.add('hidden');
  document.getElementById('blobCanvas').classList.toggle('hidden');
  
 

  // var el = document.createElement('svg');
  // el.appendChild(document.createTextNode(svgPath));

  // var tmp = document.createElement('div');
  // tmp.appendChild(el);
  // console.log(tmp.innerHTML);
  // var newSVG = tmp.innerHTML;

  canvg(document.getElementById('blobCanvas'), svgPath)

}


const Checkin = () => (
  <div className="app">
    <div id="overlay">
      <div className="start-content">
        <h1>Create your first check-in!</h1>
        <button id="start" onClick={initFunctions}>Press to start</button>
      </div>
      </div>
    <canvas id="blobCanvas" className="hidden" style={{width: '768px', minHeight: '700px'}}></canvas>
    <BlobShape />
    <div><p id="pick-shape" className="hidden tooltip1"><strong>01</strong><br/>Choose a shape</p></div>
    <div><p id="pick-color" className="hidden tooltip2"><strong>02</strong><br/>Choose a color</p></div>
    <div><p id="pick-sticker" className="hidden tooltip3"><strong>03</strong><br/>Choose a sticker!</p></div>
    <CheckinNav />
    <div id="shape-grid" className="hidden">
      <ShapeGrid />
    </div>
    <div id="color-grid" className="hidden">
      <ColorGrid 
        close={colorClose}
      />
    </div>
    <div id="sticker-grid" className="hidden">
      <StickerGrid />
    </div>
    </div>
)


export default Checkin;
