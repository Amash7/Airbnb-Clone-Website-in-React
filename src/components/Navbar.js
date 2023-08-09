import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <img src={require('../images/airbnb.png')} alt="airbnb logo" />
        </nav>
    </div>
  )
}
