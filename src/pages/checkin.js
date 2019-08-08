import React from 'react';
import BlobShape from '../components/BlobShape';
import ShapeGrid from '../components/ShapeGrid';
import ColorGrid from '../components/ColorGrid';
// import StickerGrid from '../components/StickerGrid';
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
  document.getElementById('canvas').classList.toggle('hidden');
  
  canvg(document.getElementById('blobCanvas'), svgPath)
}

function close(){
  var stickerGrid = document.getElementById('sticker-grid');
  stickerGrid.classList.toggle('hidden');
}


const Checkin = () => (
  <div className="app">
    <div id="overlay">
      <div className="start-content">
        <h1>Create your first check-in!</h1>
        <button id="start" onClick={initFunctions}>Press to start</button>
      </div>
      </div>
      <div id="canvas" className="hidden">
      <img src={require('../images/stickers/faces/happy.svg')} id="happyFace" className="hidden face" alt="happy face" />
      <img src={require('../images/stickers/faces/anxious.svg')} id="anxiousFace" className="hidden face" alt="anxious face" />
        <img src={require('../images/stickers/faces/angry.svg')} id="angryFace" className="hidden face" alt="angry face" />
        <img src={require('../images/stickers/faces/joyful.svg')} id="joyfulFace" className="hidden face" alt="joyful face" />
        <img src={require('../images/stickers/faces/sad.svg')} id="sadFace" className="hidden face" alt="sad face" />
        <img src={require('../images/stickers/faces/surprised.svg')} id="surprisedFace" className="hidden face" alt="surprised face" />
        <img src={require('../images/stickers/faces/loving.svg')} id="lovingFace" className="hidden face" alt="loving face" />
        <img src={require('../images/stickers/faces/afraid.svg')} id="afraidFace" className="hidden face" alt="afraid face" />
        <img src={require('../images/stickers/faces/unhappy.svg')} id="unhappyFace" className="hidden face" alt="unhappy face" />
      <canvas id="blobCanvas"></canvas>
      </div>
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
    <div><p id="close" onClick={close}>X Close</p></div>
    <div id="grid-row">
      <div className="faces">
        <img src={require('../images/stickers/faces/happy.svg')} id="happy" alt="happy face" onClick={happy} />
        <img src={require('../images/stickers/faces/anxious.svg')} id="anxious" alt="anxious face"  onClick={anxious}/>
        <img src={require('../images/stickers/faces/angry.svg')} id="angry" alt="angry face" onClick={angry} />
        <img src={require('../images/stickers/faces/joyful.svg')} id="joyful" alt="joyful face" onClick={joyful} />
        <img src={require('../images/stickers/faces/sad.svg')} id="sad" alt="sad face" onClick={sad} />
        <img src={require('../images/stickers/faces/surprised.svg')} id="suprised" alt="surprised face" onClick={surprised} />
        <img src={require('../images/stickers/faces/loving.svg')} id="loving" alt="loving face" onClick={loving} />
        <img src={require('../images/stickers/faces/afraid.svg')} id="afraid" alt="afraid face" onClick={afraid} />
        <img src={require('../images/stickers/faces/unhappy.svg')} id="unhappy" alt="unhappy face" onClick={unhappy} />
      </div>
    </div>
    </div>
    </div>
)

function happy() {
  var happyface = document.getElementById('happyFace');
  happyface.classList.toggle('hidden');
}
function anxious() {
  var anxiousface = document.getElementById('anxiousFace');
  anxiousface.classList.toggle('hidden');
}
function angry() {
  var angryface = document.getElementById('angryFace');
  angryface.classList.toggle('hidden');
}
function joyful() {
  var joyfulface = document.getElementById('joyfulFace');
  joyfulface.classList.toggle('hidden');
}
function sad() {
  var sadface = document.getElementById('sadFace');
  sadface.classList.toggle('hidden');
}
function surprised() {
  var surprisedface = document.getElementById('surprisedFace');
  surprisedface.classList.toggle('hidden');
}
function loving() {
  var lovingface = document.getElementById('lovingFace');
  lovingface.classList.toggle('hidden');
}
function afraid() {
  var afraidface = document.getElementById('afraidFace');
  afraidface.classList.toggle('hidden');
}
function unhappy() {
  var unhappyface = document.getElementById('unhappyFace');
  unhappyface.classList.toggle('hidden');
}


export default Checkin;
