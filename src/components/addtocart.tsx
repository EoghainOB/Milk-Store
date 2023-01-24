import React from 'react';
import { productTypes } from '../types';

export type Props = {
    item: productTypes;
  }

const Addtocart = ({item: {name, type, id}}: Props) => {

    const addToCart = async (e: { preventDefault: () => void; target: any; }) => {
        e.preventDefault();
        const data = {
          name: name,
          id: id,
          type: type,
          qty: e.target.qty.value
        };
        await fetch('http://localhost:8080/cart', {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        e.target.reset();
      };

    return (
        <>
        <form onSubmit={addToCart}>
            <select name="qty" id="qty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button type="submit">Add to Cart</button>
        </form>
        </>
    )
}

export default Addtocart