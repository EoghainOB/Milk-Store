import React from 'react'
import Cartnotify from './cartnotify'

const Header = () => {
  return (
    <>
      <div className='notify'>
        <Cartnotify />
      </div>
      <header>
      <h1>Milk e-way</h1>
      <h4>Milk Store</h4>
    </header>
    </>
  )
}

export default Header