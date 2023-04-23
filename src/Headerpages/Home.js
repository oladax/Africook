import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Home() {
  const element = <FontAwesomeIcon icon={faCoffee} />;
  const [text, setText] = useState('');

  useEffect(() => {
    const message = "Welcome to Africook, where you'll find an extensive collection of delicious and easy-to-follow recipes that are sure to impress any food lover.";
    let i = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, i));
      i++;
      if (i > message.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
   <main>
     <div className='Home'>
      <div className='div'>Africook{element}</div>
      <h3 className='h3'>
        {text}
      </h3>
      <NavLink to='/recipe' className='Navlinks'>
        GetRecipe
      </NavLink>
    </div>
   </main>
  );
}

export default Home;
