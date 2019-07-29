import React from "react";
import '../components/IndexPage.css';
import BottomNav from "../components/BottomNav";
import BlobShape from "../components/BlobShape";
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <div className="app">
    <BlobShape 
      svgstyle={{enableBackground: 'new 0 0 800 800'}}
      filterstyle={{floodColor: '#000000', floodOpacity: '0.4'}}
      shapestyle={{fill: '#BDBDBD', filter: 'url(#f1)'}}
    />
    <BottomNav 
      icon1= {<img src={require('../images/dash.svg')} id="dash" alt="bubble chart icon" />}
      icon2= {<img src={require('../images/checkin.svg')} alt="circle icon" />}
      icon3= {<img src={require('../images/learn.svg')} alt="book icon"/>}
      icon1label="Dashboard"
      icon2label="Check In"
      icon3label="Learn"
      icon1link="/shape"
      icon2link="/color"
      icon3link="/sticker"
    />
  
  
  
  </div>
)

export default IndexPage
