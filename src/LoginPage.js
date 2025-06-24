import React, { useState } from 'react';
import './LoginPage.css';
import HomePage from './HomePage';
import LandingPage from './LandingPage';
import { SlArrowLeftCircle } from "react-icons/sl";

function LoginPage() {
  const [goTo, setGoTo] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const GoToLandingPage = () => {
    setGoTo(true)
  };
  
  

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username and password');
    } else if (username === 'user' && password === 'pass') {
      setError('');
      setLoggedIn(true);
    } else {
      setError('Invalid username or password');
    }
  };

  if (goTo) return <LandingPage />
  if (loggedIn) return <HomePage username={username} />;
  

  return (
    <div>
      <SlArrowLeftCircle className='backbtn' onClick={GoToLandingPage}/>
      <div className='container'>
        <div className='card'>
          <div className='title'>
            <div className='title-login'>Login</div>
            <div className='input-field-user'>
              <input 
              type="text" 
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              /> <br/>
            </div>
            <div className='input-field-pass'>
              <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              /> <br />
            </div>
            <div className='btn-container'>
                <button className='btn-login'  onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
