import React from 'react'
import { useContext } from 'react'
import { ProductContextType } from '../types';
import { ProductContext } from './data'
import { Link } from 'react-router-dom'

const Navigation = () => {

  const { cart } = useContext(ProductContext) as ProductContextType

  return (
    <nav>
        <ul>
            <Link to="/"><button>Home</button></Link>
            <Link to="/cart"><button>Cart</button></Link>
            <h3>{cart.length}</h3>
        </ul>
    </nav>
  )
}

export default Navigation