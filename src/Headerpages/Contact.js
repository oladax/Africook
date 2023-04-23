import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Contact() {

  const element = <FontAwesomeIcon icon={faCoffee}/>
  return (
    <main>
      <div className='contact'>
      <div className='div'>Africook {element}</div>

      <h4>
      Africook website is designed by Oladax. For more information, you can reach out to him on his social contacts.<br>
      </br>   Thank you!   </h4>

      <div class="social-media-container">
  <a href='https://web.facebook.com/olamide.daniel.581/?_rdc=1&_rdr' class="social-media-link">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href='mailto:danielolamide141@gmail.com ' class="social-media-link">
    <FontAwesomeIcon icon={faGoogle} />
  </a>
  <a href='https://www.linkedin.com/in/olamide-daniel-812039243?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBgGEK%2BqMSaqM3amwcmgV2Q%3D%3D' class="social-media-link">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
  <a href='https://api.whatsapp.com/message/MQX3O3MI2UR4L1?autoload=1&app_absent=0' class="social-media-link">
    <FontAwesomeIcon icon={faWhatsapp} />
  </a>
</div>

       <footer>
   <p>&copy; 2023 Oladax. All rights reserved.</p>
</footer>

    </div>
    </main>
  )
}

export default Contact;
