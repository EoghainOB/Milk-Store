import React from 'react'
import { useContext } from 'react'
import { ProductContextType } from '../types';
import { ProductContext } from './data'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cartnotify = () => {

  const { cart } = useContext(ProductContext) as ProductContextType

  return (
    <div className='navigation'>
    <nav>
      <ul>
        {cart.length > 0 && <h3><Link to="/cart"><FontAwesomeIcon icon={faCartShopping}/> {cart.length} item</Link></h3>}
      </ul>
    </nav>
    </div>
  )
}

export default Cartnotify