import React from 'react'
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
const Google = () => {
    const navigate=useNavigate()
    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
          ? JSON.parse(localStorage.getItem('loginData'))
          : null
      );
    
      const handleFailure = (result) => {
        alert(result);
      };
    
      const handleLogin = async (googleData) => {
        const res = await fetch('/googelauth', {
          method: 'POST',
          body: JSON.stringify({
            token: googleData.tokenId,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        
        
    });
    
    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
    navigate('/')
};
const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
      };
    
  return (
    <div>

<GoogleLogin
              clientId="653983784840-0cldsrk43ng1uca9rp8muvf90b4l4kqa.apps.googleusercontent.com"
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>


    </div>
  )
}

export default Google