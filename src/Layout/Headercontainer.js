import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Headercontainer() {
  const element = <FontAwesomeIcon icon={faCoffee} />
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  const menu = () => {
    let dropdown_content = document.querySelector(".dropdown-content");
    let links = document.querySelectorAll(".dropdown-content a")
    dropdown_content.classList.toggle("toggle");
    links.forEach((link) => link.classList.toggle("toggle"))
    setIsMenuOpen(!isMenuOpen);
  }
  
  return (
  <div className='headcontainer'>
    <header >
  <div className='header-container'>
 
  <h1>Africook{element} </h1>

 
          <nav>

<NavLink exact to="/" className="NavLink">Home</NavLink>
<NavLink to="/about" className="NavLink">About</NavLink>
<NavLink to="/contact" className="NavLink">Contacts</NavLink>
<NavLink to="/recipe" className="NavLink">GetRecipe</NavLink>
</nav>


<section className="dropdown-container">
  <div className="dropdown">
    <button className="dropbtn" onClick={menu}>  <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
</button>
   
  </div>
</section>

    </div>
            
        </header>
       
        <div className="dropdown-content">
      <NavLink exact to="/" className="NavLink"  onClick={menu}>Home </NavLink>
      <NavLink to="/about" className="NavLink"  onClick={menu}>About</NavLink>
      <NavLink to="/contact" className="NavLink"  onClick={menu}>Contacts</NavLink>
      <NavLink to="/recipe" className="NavLink"    onClick={menu}>GetRecipe</NavLink>
      
      <div class="social-media">
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
    </div>
       <div>
       <div >
             {<Outlet/>}   
            </div>
       </div>
    </div>
  )
}
export default Headercontainer
