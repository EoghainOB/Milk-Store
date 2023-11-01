import React, { useContext } from "react";
import { cartTypes, ProductContextType } from "../types";
import { ProductContext } from "./data";

export type Props = {
  cartitem: cartTypes;
};

const Cartdetails = ({ cartitem }: Props) => {
  const { setCart } = useContext(ProductContext) as ProductContextType;

  const deleteItem = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem("cart") || "{}");
    for (let i = 0; i < items.length; i++) {
      if (items[i]._id === cartitem._id) {
        items.splice(i, 1);
      }
      localStorage.setItem("cart", JSON.stringify(items));
      setCart(items);
    }
  };

  return (
    <>
      <div className="cartContents">
        <div className="cartData">
          <div className="cartProduct">
            <p>{cartitem.name}</p>
          </div>
          <div className="cartQty">
            <p>{cartitem.qty}L</p>
          </div>
          <div className="cartRemove">
            <button id={cartitem._id} type="button" onClick={deleteItem}>
              <span id="removeText">Remove</span>
              <span id="xText">X</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartdetails;
