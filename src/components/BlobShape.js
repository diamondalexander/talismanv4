import React from 'react';
import './BlobShape.css';

const BlobShape = (props) => (
  <div id="svg-container">
        <svg id="blob-shape" version="1.1" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"  style={{enableBackground: 'new 0 0 800 800'}} width="500" height="500">
          <filter id="f1">
            <feDropShadow dx="3" dy="3" stdDeviation="10" style={{floodColor: '#000000', floodOpacity: '0.4'}} />
            {/* <feFlood flood-color="#eee" flood-opacity="0.3" x="0" y="0" width="200" height="200" /> */}
            {/* <feOffset result="offOut" in="SourceGraphic" dx="10" dy="15" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="15" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" /> */}
          </filter>
        <circle id="mood" cx="400" cy="400" r="350" style={props.shapestyle} fill="#BDBDBD"/>
        {/* <path id="mood" style={props.pathStyle} filter="url(#f1)" d="M137.5,222.1c-56.4,154-40.4,381.7,105.1,485.3c11.8,8.4,116.8,80.2,238.8,45.9
        c76.8-21.6,166.1-86.8,169.1-159.5c1.7-41.5-26.1-52.5-28.7-112.7c-2.4-57,11-60.1,29.6-123.2c32.9-111.6-68.6-231.3-72.6-236.9
        c-49.1-69-158.3-133.6-269.4-101.3C199.9,51.4,157.1,168.6,137.5,222.1z"/> */}
    </svg>
    </div>
)

export default BlobShape;