import React from 'react'
import RandomNavbar from './RandomNavbar'
import Home from './Home'

function Header() {
  return (
    <div>
      <h1 className='text-center'>This is my first App</h1>
      <RandomNavbar />
      <Home />
    </div>
  )
}

export default Header
