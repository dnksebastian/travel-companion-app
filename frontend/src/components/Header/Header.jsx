import './Header.css';

import { useState } from 'react';
import { Link } from "react-router-dom";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen((prev) => !prev)
  };

  return (
    <header className='header-wrap'>
      <div className="logo">Travel Companion</div>
      <nav className={`top-nav ${menuOpen? 'menu-active' : ''}`}>
        <ul>
          <li className='menu-el'>
          <Link to='/' onClick={handleToggle}><p className='menu-link'>Home</p></Link>
          </li>
          <li className='menu-el'>
          <Link to='/1' onClick={handleToggle}><p className='menu-link'>Page 1</p></Link>
          </li>
          <li className='menu-el'>
          <Link to='/2' onClick={handleToggle}><p className='menu-link'>Page 2</p></Link>
          </li>
        </ul>
      </nav>
      <div className={`mobile-controls ${menuOpen? 'controls-active' : ''}`} onClick={handleToggle}>
        <span className='mob-bar bar-top'></span>        
        <span className='mob-bar bar-mid'></span>        
        <span className='mob-bar bar-bot'></span>        
      </div>
    </header>
  )
}

export default Header