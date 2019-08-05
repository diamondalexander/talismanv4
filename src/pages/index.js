import React from 'react';
import BlobShape from '../components/BlobShape';
import ShapeGrid from '../components/ShapeGrid';
import ColorGrid from '../components/ColorGrid';
import StickerGrid from '../components/StickerGrid';
import '../components/Checkin.css';
import CheckinNav from '../components/CheckinNav';

function initFunctions() {
  var overlay = document.getElementById('overlay');
  overlay.classList.add('hidden');
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
      <StickerGrid />
    </div>
  </div>
)


export default Checkin;
