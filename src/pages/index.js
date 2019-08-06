import React from 'react';
import '../components/About.css';
import moodgif from '../images/mood-gif.gif';

function showEmail() {
  var email = document.getElementById('mailchimp');
  email.classList.toggle('hidden');
}

function startCheckin() {
  window.location='https://www.talismanapp.com/checkin';
}

const AboutPage = () => (
  <main id="main">
   <div id="mailchimp" className="hidden overlay">
   <p onClick={showEmail} id="emailclose"><i class="fas fa-times"></i> Close</p>
    <div id="form-container">
      <h2>Stay Connected.</h2>
      <p>Enter your email address below to keep up-to-date with all things Talisman!</p>
      {/* <!-- Begin Mailchimp Signup Form --> */}
<div id="mc_embed_signup">
<form action="https://colorado.us20.list-manage.com/subscribe/post?u=6799f1de47f4bface2b317b8e&amp;id=c493ea16e4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" noValidate>
    <div id="mc_embed_signup_scroll">
<div class="mc-field-group">
	<input type="email" defaultValue="" name="EMAIL" class="required email" id="mce-EMAIL" />
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style={{display: 'none'}}></div>
		<div class="response" id="mce-success-response" style={{display: 'none'}}></div>
    </div>
	{/*  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_6799f1de47f4bface2b317b8e_c493ea16e4" tabindex="-1" value="" /></div>
    <div class="clear"><input type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" class="button" onClick={showEmail} /></div>
    </div>
</form>
</div>
</div>
</div>

{/* <!--End mc_embed_signup--> */}
    <nav>
      <img src={require('../images/talisman.svg')} id="logo" alt="talisman logo" />
      <p id="signup" onClick={showEmail}><i class="fas fa-paper-plane"></i>Sign Up</p>
      
    </nav>
    <section id="content">
      <div id="copy-section">
        <h1>Give shape to your emotions.</h1>
        <p>Your emotions are a language. Talisman helps you learn it and channel your feelings in productive ways.</p>
        <button id="checkin" onClick={startCheckin}>Check In</button>
        <div id="coachmark">
          <img src={require('../images/arrow.png')} id="arrow" alt="upward curved arrow pointing to check-in button" />
          <p>Check out the prototype!</p>
        </div>
      </div>
      <div id="gif-section">
        <img src={require('../images/swoop-big.png')} id="swoop" alt="swoop design element for background" />
        {/* <img src={require('../images/sunny.png')} id="gif" alt="gif animation of variety of checkins made using Talisman" /> */}
        <img src={moodgif} id="gif" alt="gif animation of variety of checkins made using Talisman" />
      </div>
    </section>
  
  </main>
)

export default AboutPage;