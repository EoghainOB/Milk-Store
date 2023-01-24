import { cartTypes } from '../types';

export type Props = {
  cart: cartTypes[];
}

const Cartdetails = (cart: Props) => {
  
  return (
    <div>
        {cart.cart.map(data => (
        <div key={data.id}>
            <p>{data.name}</p>
            <p>{data.qty}</p>
            <p>Sub total {data.price * data.qty}</p>
        </div>
        ))}
    </div>
  )
}

export default Cartdetails