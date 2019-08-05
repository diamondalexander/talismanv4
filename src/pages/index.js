import React from 'react';
import '../components/About.css';

function showEmail() {
  var email = document.getElementById('mailchimp');
  email.classList.toggle('hidden');
}

const AboutPage = () => (
  <main id="main">
   {/* <!-- Begin Mailchimp Signup Form --> */}
   <div id="mailchimp" className="hidden overlay">
   <p onClick={showEmail} id="emailclose"><i class="fas fa-times"></i> Close</p>
    <div id="form-container">
      </div> 
      </div>
    <nav>
      <img src={require('../images/talisman.svg')} id="logo" alt="talisman logo" />
      <p id="signup" onClick={showEmail}><i class="fas fa-paper-plane plane"></i><span>Sign Up</span></p>
      
    </nav>
    <section id="content">
      <div id="copy-section">
        <h1>Give shape to your emotions.</h1>
        <p>Your emotions are a language. Talisman helps you learn it and channel your feelings in productive ways.</p>
        <button id="checkin">Check In</button>
        <div id="coachmark">
          <img src={require('../images/arrow.png')} id="arrow" alt="upward curved arrow pointing to check-in button" />
          <p>Check out the prototype!</p>
        </div>
      </div>
      <div id="gif-section">
        <img src={require('../images/swoop-big.png')} id="swoop" alt="swoop design element for background" />
        <img src={require('../images/blue-guy.png')} id="gif" alt="gif animation of variety of checkins made using Talisman" />
      </div>
    </section>
  
  </main>
)

export default AboutPage;