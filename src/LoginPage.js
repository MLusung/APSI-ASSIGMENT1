import React, { useState } from 'react';
import './LoginPage.css'

function LoginPage() {
 
  return (
    <div className='container'>
      <div className='card'>
        <div className='title'>
          <div className='title-login'>Login</div>
          <div className='input-field-user'>
            <input type="text" placeholder="Username"/> <br/>
          </div>
          <div className='input-field-pass'>
            <input type="password" placeholder="Password"/> <br />
          </div>
          <div className='btn-container'>
              <button className='btn-login'>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
