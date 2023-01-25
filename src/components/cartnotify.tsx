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
        {cart.length > 0 && <h3><Link to="/cart">{cart.length} item</Link></h3>}
      </ul>
    </nav>
    </div>
  )
}

export default Cartnotify