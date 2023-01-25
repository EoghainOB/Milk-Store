import React from 'react'
import { useContext } from 'react'
import { ProductContextType } from '../types';
import { ProductContext } from './data'
import { Link } from 'react-router-dom'

const Cartnotify = () => {

  const { cart } = useContext(ProductContext) as ProductContextType

  return (
    <div className='navigation'>
    <nav>
      <ul>
        {cart.length > 0 && <Link to="/Cart"><h3>{cart.length} item</h3></Link>}
      </ul>
    </nav>
    </div>
  )
}

export default Cartnotify