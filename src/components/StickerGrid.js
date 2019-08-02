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
      <div className="faces">
        <img src={require('../images/stickers/faces/happy.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/anxious.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/angry.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/joyful.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/sad.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/surprised.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/loving.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/afraid.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/unhappy.svg')} alt="happy face" />
      </div>
    </div>

    {/* <div id="grid-row">
      <div className="faces">
        <p className="sticker-titles">Emotion Icons</p> 
        <img src={require('../images/stickers/faces/happy.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/anxious.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/angry.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/joyful.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/sad.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/surprised.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/loving.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/afraid.svg')} alt="happy face" />
        <img src={require('../images/stickers/faces/unhappy.svg')} alt="happy face" />
      </div>
    </div> */}

  </div>
)

export default StickerGrid;