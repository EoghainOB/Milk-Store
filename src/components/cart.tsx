import { useContext } from 'react'
import { ProductContextType } from '../types';
import Cartdetails from './cartdetails';
import { ProductContext } from './data';
import Navigation from './navigation';

const Cart = () => {
    
  const { cart } = useContext(ProductContext) as ProductContextType

  return (
    <>
    <div className="navigate">
    <Navigation />
    <div className='cart'>
      <h2 className='cartName'>My Milk Cart</h2>
          {cart.length === 0 && <div className='cartEmpty'>
            <h1>Your Milk cart is Empty</h1>
          </div>}
          {cart.length !== 0 && <><div className='cartHeaders'>
          <div className='cartProduct'>
          <h3>Product</h3>
        </div><div className='cartQty'>
            <h3>Qty</h3>
          </div><div className='cartRemove'>
            <h3>Remove?</h3>
          </div>
        </div>
        <hr/>
        <Cartdetails cart={cart}/>
        </>}
      </div>
    </div>
    </>
  )
}

export default Cart
