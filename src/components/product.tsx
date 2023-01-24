import React from 'react'
import { productTypes } from '../types';

export type Props = {
    products: productTypes;
  }

const Product = ({products}: Props) => {

  return (
  <>
    <ul key={products.id} className='milk'>
      <li>
        <div className='milkImage'>
        <img alt={products.name} src={require('./images/milk.png')}/>
        </div>
        <div className='milkText'>
        <h3>{products.name}</h3>
        <p>{products.type}</p>
        <p>{products.storage} litre</p>
        </div>
      </li>
    </ul>
  </>
  )
}

export default Product;
