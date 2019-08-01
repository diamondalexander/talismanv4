import React from 'react';
import './grid.css';

function close(){
  var stickerGrid = document.getElementById('sticker-grid');
  stickerGrid.classList.toggle('hidden');
}

const StickerGrid = () => (

  <div className="container">
   <div><p id="close" onClick={close}>X Close</p></div>
    <div id="grid-row">
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

export default StickerGrid;