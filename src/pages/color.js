import React from 'react';
import BottomNav from '../components/BottomNav';
import BlobShape from '../components/BlobShape';

const Color = () => (
  <div className="app">
    <BlobShape
      shapestyle={{filter: 'url(#f1)'}}
      fill="#BDBDBD"
    />
    <BottomNav
      id="ci-controls" 
      icon1= {<img src={require('../images/shape.svg')} alt="circle icon for shape options" />}
      icon2= {<img src={require('../images/color.svg')} alt="color drop icon for color options" />}
      icon3= {<img src={require('../images/sticker.svg')} alt="sticker icon for sticker options"/>}
      icon1link="/shape"
      icon2link="/color"
      icon3link="/sticker"
    />
  </div>
)

export default Color