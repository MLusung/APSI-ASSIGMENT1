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
    <div>
      <nav className='nav'>
        <div className='navWarpper'>
            <a href="#!" class="brand-logo">MRTL</a>
            <div className='loginContainer'>
              <button className='loginbtn' onClick={GoToLogin}>Login</button>
            </div>
        </div>
      </nav>
      <div>
        <h1 className='header'>Halo, ich bin Mykel!</h1>
        <p className='paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
