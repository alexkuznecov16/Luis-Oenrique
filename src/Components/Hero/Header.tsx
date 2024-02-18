import React from 'react'
import logo from '../../assets/logo.png'

const Header: React.FC = () => {
  return (
    <div className="Header">
        <div className="Header-logo logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className='Header__nav'>
          <a href="#home">Home</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICE</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#contact">CONTACT</a>
      </nav>
    </div>
  )
}

export default Header