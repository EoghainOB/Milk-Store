import { useContext } from 'react'
import { ProductContextType } from '../types';
import { ProductContext } from './data'
import Cartdetails from './cartdetails';

const Cart = () => {

  const { cart } = useContext(ProductContext) as ProductContextType

  return (
    <div>
      <h2>Cart</h2>
        <Cartdetails cart={cart}/>
    </div>
  )
}

export default Cart