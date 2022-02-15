import React from 'react'
import logo from '../images/mj.png'

function Header() {
  return (
    <header className='header'>
      <img
        className="logo"
        src={logo}
        alt="logo"
      />
      <h2 className='title'>Meme Generator</h2>
      <h3 className='subtitle'>by Colby</h3>
    </header>
  )
}

export default Header