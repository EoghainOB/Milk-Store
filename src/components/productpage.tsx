import React, { useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { cartTypes, ProductContextType } from '../types';
import { ProductContext } from './data';
import Navigation from './navigation';

const Productpage = () => {

  const { id } = useParams();
  const { products, setCart } = useContext(ProductContext) as ProductContextType
  const [amount, setAmount] = useState<number>(1);

  const filtered = products.find(milk => milk.id === id)

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  };

  const addToCart = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: any = {
      name: filtered?.name,
      qty: amount,
      type: filtered?.type,
      _id: filtered?.id,
    };
    const cart = localStorage.getItem('cart');
    if(cart === null) {
      localStorage.setItem('cart', JSON.stringify([data]));
      } else {
      const getCart: any = localStorage.getItem('cart');
      let currentCart: cartTypes[] = JSON.parse(getCart);
      currentCart.push(data);
      localStorage.setItem('cart', JSON.stringify(currentCart));
      setCart(currentCart)
      }
  };

  return (
    <>
    <div className='navigate'>
    <Navigation />
    <div className='productPage'>
    <ul key={id} >
      <li className='ppMilk'>
        <div className='ppMilkImage'>
          <img alt={filtered?.name} src={require('./images/milk.png')}/>
        </div>
        <div className='ppMilkText'>
          <h3>{filtered?.name}</h3>
          <p>{filtered?.type}</p>
          <p><b>{amount}</b> / {filtered?.storage} liter</p>
          <>
          <hr/>
          <div className='sliderBox'>
          <input type="range" className='slider' min="1" max={filtered?.storage} value={amount} onChange={handleAmount} step="1"/>
          <br/>
          </div>
        <form onSubmit={addToCart}>
          <button type="submit">Add to Cart</button>
        </form>
        </>
        </div>
      </li>
    </ul>
    </div>
    </div>
    </>
  )
}

export default Productpage
