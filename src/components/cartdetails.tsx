import { cartTypes } from '../types';

export type Props = {
  cart: cartTypes[];
}

const Cartdetails = (cart: Props) => {

  const deleteItem = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  const purchaseMilk = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = cart
    await fetch('http://localhost:8080/cart', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    localStorage.setItem('MilkCart', JSON.stringify(''));
  };
  
  return (
    <>
    <div key={Math.random()} className='cartContents'>
        {cart.cart.map(data => (
        <div key={Math.random()} className='cartData'>
            <div className='cartProduct'>
              <p>{data.name}</p>
            </div>
            <div className='cartQty'>
              <p>{data.qty} liters</p>
            </div>
            <div className='cartRemove'>
              <button onClick={deleteItem}>Remove</button>
              </div>
        </div>
        ))}
        <hr/>
    </div>
    <div>
    <button onClick={purchaseMilk}>Complete Order</button>
    </div>
    </>
  )
}

export default Cartdetails