import React from 'react';
import BottomNav from '../components/BottomNav';

const Shape = () => (
  <BottomNav
    id="ci-controls" 
    icon1= {<img src={require('../images/shape.svg')} alt="circle icon for shape options" />}
    icon2= {<img src={require('../images/color.svg')} alt="paint bucket icon for color options" />}
    icon3= {<img src={require('../images/sticker.svg')} alt="sticker icon for sticker options"/>}
  />
)


export default Shape;