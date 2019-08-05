import React from 'react';
import BlobShape from '../components/BlobShape';
import ShapeGrid from '../components/ShapeGrid';
import ColorGrid from '../components/ColorGrid';
// import StickerGrid from '../components/StickerGrid';
import '../components/Checkin.css';
import CheckinNav from '../components/CheckinNav';
import interact from 'interactjs';

function initFunctions() {
  var overlay = document.getElementById('overlay');
  overlay.classList.add('hidden');
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

    <BlobShape />
    <CheckinNav />
    <div id="shape-grid" className="hidden">
      <ShapeGrid />
    </div>
    <div id="color-grid" className="hidden">
      <ColorGrid />
    </div>
<div id="sticker-grid" className="hidden">
<div className="container">
    <div><p id="close" onClick={close}>X Close</p></div>
    <div id="grid-row">
      <div className="faces">
        <img src={require('../images/stickers/faces/happy.svg')} id="happy" alt="happy face" className="draggable" />
        <img src={require('../images/stickers/faces/anxious.svg')} id="anxious" alt="anxious face" className="draggable" />
        <img src={require('../images/stickers/faces/angry.svg')} id="angry" alt="angry face" className="draggable" />
        <img src={require('../images/stickers/faces/joyful.svg')} id="joyful" alt="joyful face" className="draggable" />
        <img src={require('../images/stickers/faces/sad.svg')} id="sad" alt="sad face" className="draggable" />
        <img src={require('../images/stickers/faces/surprised.svg')} id="suprised" alt="surprised face" className="draggable" />
        <img src={require('../images/stickers/faces/loving.svg')} id="loving" alt="loving face" className="draggable" />
        <img src={require('../images/stickers/faces/afraid.svg')} id="afraid" alt="afraid face" className="draggable" />
        <img src={require('../images/stickers/faces/unhappy.svg')} id="unhappy" alt="unhappy face" className="draggable" />
      </div>
    </div>
    </div>
    </div>
    </div>
)


export default Checkin;
