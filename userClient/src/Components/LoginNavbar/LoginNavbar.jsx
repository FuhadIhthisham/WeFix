import React, { Fragment } from 'react';
import './UserLoginNavbar.css'
import { useNavigate } from 'react-router-dom' 

function LoginNavbar() {

  const navigate = useNavigate()

  return (
    <Fragment>
      <nav className="navbar navbar-light" style={{backgroundColor: '#0F3F51'}}>
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src="../WeFixLogo2.png" onClick={()=>navigate('/')} style={{cursor: 'pointer'}} alt="Logo" className='navLogo' />
          </div>
        </div>
      </nav>
    </Fragment>
    );
}

export default LoginNavbar;