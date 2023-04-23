import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function About() {

  const element = <FontAwesomeIcon icon={faCoffee} />

  return (
    <main>
      <div className='about'>
       <div className='div'>Africook {element}</div>
       <h3>
       At Africook, we're passionate about food and bringing people together through the joy of cooking and sharing meals. 
       Whether you're an experienced home cook or a beginner looking
        to expand your culinary horizons, our website is designed to provide you with a wealth of inspiration and resources.<br></br>
        <br></br>
        From classic comfort foods to exotic international dishes, our collection of recipes spans a diverse range of cuisines and flavors, 
        so you can always find something new and exciting to try.
       </h3>
    </div>
    </main>
  )
}

export default About
