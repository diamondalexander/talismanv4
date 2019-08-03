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
      <div id="mc_embed_signup">
          <form action="https://colorado.us20.list-manage.com/subscribe/post?u=6799f1de47f4bface2b317b8e&amp;id=c493ea16e4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
              <img src={require('../images/loving-face.png')} id="loving-face" alt="loving face talisman checkin" />
              <h2 id="signup-header">We'd love for you to join our list!</h2>
              <div id="signup-form">
              <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
              {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_6799f1de47f4bface2b317b8e_c493ea16e4" tabindex="-1" value="" /></div>
              <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div></div>
            </div>
          </form>
        </div>
        {/* <!--End mc_embed_signup-->*/}
        </div>
      </div> 
    <nav>
      <img src={require('../images/talisman.svg')} id="logo" alt="talisman logo" />
      <p id="signup" onClick={showEmail}><i className="fas fa-paper-plane plane"></i><span>Sign Up</span></p>
      
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