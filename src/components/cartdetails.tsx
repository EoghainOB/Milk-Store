import React from 'react'
import { cartTypes } from '../types';

export type Props = {
  cartitem: cartTypes;
}

const Cartdetails = ({cartitem}: Props) => {
  
  const deleteItem = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.target as HTMLButtonElement
    await fetch(`http://localhost:8080/cart/${id}`, {
        method: 'DELETE'
      })
    }
  
  return (
    <>
    <div className='cartContents'>
      <div className='cartData'>
        <div className='cartProduct'>
          <p>{cartitem.name}</p>
        </div>
        <div className='cartQty'>
          <p>{cartitem.qty} liters</p>
        </div>
        <div className='cartRemove'>
          <button id={cartitem._id} type="button" onClick={deleteItem}>Remove</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cartdetails