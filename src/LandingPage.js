import React, { useState } from 'react';
import './LandingPage.css';
import LoginPage from './LoginPage';

function LandingPage() {
  const [goTo, setGoTo] = useState(false);
  const GoToLogin = (val) => {
    setGoTo(true)
  };

  if(goTo){
    return <LoginPage/>;
  };
  return (
    <nav className='nav'>
      <div className='navWarpper'>
          <a href="#!" class="brand-logo">MRTL</a>
          <div className='loginContainer'>
            <button className='loginbtn' onClick={GoToLogin}>Login</button>
          </div>
      </div>
    </nav>
  );
}

export default LandingPage;
