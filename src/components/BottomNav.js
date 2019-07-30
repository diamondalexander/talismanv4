import React from 'react';
import './BottomNav.css';

const BottomNav = (props) => (
  <div className="nav-container">
    <div className="icons-container" id={props.id}>
      <div className="icon" onClick={props.link1}>
        <a href={props.icon3link}>
          {props.icon1}
          <p>{props.icon1label}</p>
        </a>
      </div>
      <div className="icon" onClick={props.link2}>
        <a href={props.icon2link}>
          {props.icon2}
          <p>{props.icon2label}</p>
        </a>
      </div>
      <div className="icon" onClick={props.link3}>
        <a href={props.icon3link}>
          {props.icon3}
          <p>{props.icon3label}</p>
        </a>
      </div>
    </div>
  </div>
)

export default BottomNav;