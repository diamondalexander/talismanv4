import React from 'react';
import './grid.css';

function close(){
  var shapeGrid = document.getElementById('shape-grid');
  shapeGrid.classList.toggle('hidden');
  var showPickColor = document.getElementById('pick-color');
  showPickColor.classList.toggle('hidden');
}

const ShapeGrid = () => (

  <div className="container">
    <div><p id="close" onClick={close}>Next <i className="fas fa-arrow-right"></i></p></div>
    <div id="grid-row">

      <svg className="svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312.01 355.27"><path id="mood" d="M301.16,181.29c15.37,33.16,14.73,77.71-4,111-33.94,60.32-123.24,76.52-188,52C32,315.07,2.69,233,.16,176.29c-.54-12-3.43-111,69-155,37.35-22.72,95.72-31.44,127-5,24.26,20.5,9.8,43.19,38,89C261,148.85,284.45,145.23,301.16,181.29Z" style={{fill: '#bdbdbd'}}/></svg>

      <svg className="svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 347.2 337.68"><path id="mood" d="M176.06,64.78,232.59,1.47A4.33,4.33,0,0,1,240,5.37L223.55,73.52a4.34,4.34,0,0,0,5.26,5.23L312.26,58a4.33,4.33,0,0,1,3.86,7.5L266.38,108a4.33,4.33,0,0,0,2.88,7.63l73.52-1.22a4.33,4.33,0,0,1,2.18,8.12l-68,37.78a4.34,4.34,0,0,0,0,7.58l68,37.77a4.33,4.33,0,0,1-2.18,8.12L265,212.48a4.33,4.33,0,0,0-3.79,6.56l40,66.71a4.34,4.34,0,0,1-6,5.95l-59.22-35.52a4.34,4.34,0,0,0-6,5.87l25.68,45.08a4.33,4.33,0,0,1-6.22,5.72l-72-49.53a4.34,4.34,0,0,0-6.25,1.47L132,335.44a4.34,4.34,0,0,1-8.13-2.18l1.31-79.11a4.33,4.33,0,0,0-5.92-4.1l-38.73,15.2a4.33,4.33,0,0,1-5.71-5.35l13.3-41.8a4.33,4.33,0,0,0-4.2-5.65L4.41,213.76a4.33,4.33,0,0,1-2.17-8.12l68-37.77a4.34,4.34,0,0,0,0-7.58l-68-37.78a4.33,4.33,0,0,1,2.17-8.12l77.78,1.29A4.33,4.33,0,0,0,86,109.12L46,42.4a4.33,4.33,0,0,1,5.94-5.94L116.13,75a4.33,4.33,0,0,0,6.41-4.84L114,38.38a4.34,4.34,0,0,1,6.52-4.78l50,31.95A4.33,4.33,0,0,0,176.06,64.78Z" style={{fill:' #bdbdbd'}}/></svg>
      
      <svg className="svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340.57 234.68"><path id="mood" d="M336.7,200.88a23.18,23.18,0,0,1-19,20.24c-82.45,14.53-177,19.68-279.2,3.88q-9.78-1.51-19.35-3.23A23.2,23.2,0,0,1,0,198.36L4.27,30.6A23,23,0,0,1,13,13.06,61.18,61.18,0,0,1,26.51,5a64.06,64.06,0,0,1,25.6-5C72.69-.09,165.3,4.57,291.81,12.82a22.57,22.57,0,0,1,5.69,1.1,56.42,56.42,0,0,1,17,9.08c9.5,7.47,24.91,24.87,26,102A595.18,595.18,0,0,1,336.7,200.88Z" style={{fill: '#bdbdbd'}}/></svg>

      <svg className="svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326.14 311.56"><path id="mood" d="M165.37,285.89,16,311.36A13.69,13.69,0,0,1,.87,293.11L53.51,151,106.14,8.93A13.68,13.68,0,0,1,129.5,5l96.74,116.63L323,238.21a13.68,13.68,0,0,1-8.24,22.22Z" style={{fill: '#bdbdbd'}}/></svg>

      <svg className="svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 279.72 362.08"><path id="mood" d="M181.93,359.91c26.38-4.9,46.25-17.45,58.82-27.45a24.55,24.55,0,0,0,7.71-10.6l29.7-79.26a24.52,24.52,0,0,0-2.68-22.39L154.82,42.48a24.55,24.55,0,0,0-10.37-8.66L72.79,2.12A24,24,0,0,0,59.9.2C43.84,2.31,22.46,10.54,10,39.42,3.06,55.43.59,73.82,0,90.13A24.46,24.46,0,0,0,4,104.2a170.47,170.47,0,0,1,22,49.87c14.73,57.27-10.37,89.72-1.43,123.1C38.82,330.46,115.47,372.24,181.93,359.91Z" style={{fill: '#bdbdbd'}}/></svg>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312.01 355.27"><path id="mood" className="svgs" d="M301.16,181.29c15.37,33.16,14.73,77.71-4,111-33.94,60.32-123.24,76.52-188,52C32,315.07,2.69,233,.16,176.29c-.54-12-3.43-111,69-155,37.35-22.72,95.72-31.44,127-5,24.26,20.5,9.8,43.19,38,89C261,148.85,284.45,145.23,301.16,181.29Z" style={{fill: '#bdbdbd'}}/></svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 347.2 337.68"><path id="mood" className="svgs" d="M176.06,64.78,232.59,1.47A4.33,4.33,0,0,1,240,5.37L223.55,73.52a4.34,4.34,0,0,0,5.26,5.23L312.26,58a4.33,4.33,0,0,1,3.86,7.5L266.38,108a4.33,4.33,0,0,0,2.88,7.63l73.52-1.22a4.33,4.33,0,0,1,2.18,8.12l-68,37.78a4.34,4.34,0,0,0,0,7.58l68,37.77a4.33,4.33,0,0,1-2.18,8.12L265,212.48a4.33,4.33,0,0,0-3.79,6.56l40,66.71a4.34,4.34,0,0,1-6,5.95l-59.22-35.52a4.34,4.34,0,0,0-6,5.87l25.68,45.08a4.33,4.33,0,0,1-6.22,5.72l-72-49.53a4.34,4.34,0,0,0-6.25,1.47L132,335.44a4.34,4.34,0,0,1-8.13-2.18l1.31-79.11a4.33,4.33,0,0,0-5.92-4.1l-38.73,15.2a4.33,4.33,0,0,1-5.71-5.35l13.3-41.8a4.33,4.33,0,0,0-4.2-5.65L4.41,213.76a4.33,4.33,0,0,1-2.17-8.12l68-37.77a4.34,4.34,0,0,0,0-7.58l-68-37.78a4.33,4.33,0,0,1,2.17-8.12l77.78,1.29A4.33,4.33,0,0,0,86,109.12L46,42.4a4.33,4.33,0,0,1,5.94-5.94L116.13,75a4.33,4.33,0,0,0,6.41-4.84L114,38.38a4.34,4.34,0,0,1,6.52-4.78l50,31.95A4.33,4.33,0,0,0,176.06,64.78Z" style={{fill:' #bdbdbd'}}/></svg>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340.57 234.68"><path id="mood" className="svgs" d="M336.7,200.88a23.18,23.18,0,0,1-19,20.24c-82.45,14.53-177,19.68-279.2,3.88q-9.78-1.51-19.35-3.23A23.2,23.2,0,0,1,0,198.36L4.27,30.6A23,23,0,0,1,13,13.06,61.18,61.18,0,0,1,26.51,5a64.06,64.06,0,0,1,25.6-5C72.69-.09,165.3,4.57,291.81,12.82a22.57,22.57,0,0,1,5.69,1.1,56.42,56.42,0,0,1,17,9.08c9.5,7.47,24.91,24.87,26,102A595.18,595.18,0,0,1,336.7,200.88Z" style={{fill: '#bdbdbd'}}/></svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326.14 311.56"><path id="mood" className="svgs" d="M165.37,285.89,16,311.36A13.69,13.69,0,0,1,.87,293.11L53.51,151,106.14,8.93A13.68,13.68,0,0,1,129.5,5l96.74,116.63L323,238.21a13.68,13.68,0,0,1-8.24,22.22Z" style={{fill: '#bdbdbd'}}/></svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 279.72 362.08"><path id="mood" className="svgs" d="M181.93,359.91c26.38-4.9,46.25-17.45,58.82-27.45a24.55,24.55,0,0,0,7.71-10.6l29.7-79.26a24.52,24.52,0,0,0-2.68-22.39L154.82,42.48a24.55,24.55,0,0,0-10.37-8.66L72.79,2.12A24,24,0,0,0,59.9.2C43.84,2.31,22.46,10.54,10,39.42,3.06,55.43.59,73.82,0,90.13A24.46,24.46,0,0,0,4,104.2a170.47,170.47,0,0,1,22,49.87c14.73,57.27-10.37,89.72-1.43,123.1C38.82,330.46,115.47,372.24,181.93,359.91Z" style={{fill: '#bdbdbd'}}/></svg> */}
    </div>
  </div>
)

export default ShapeGrid;