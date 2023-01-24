import React from 'react'
import { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ProductContextType, productTypes } from '../types';
import Addtocart from './addtocart';
import { ProductContext } from './data';
import background from "./images/milkdrip.gif";

const Productpage = () => {

const { id } = useParams();
const { products } = useContext(ProductContext) as ProductContextType

const filtered = products.find(milk => milk.id === id)

  return (
    <>
    <div className='ppFilter' style={{ backgroundImage: `url(${background})`}}>
    <ul key={id} className='ppMilk'>
      <li>
        <div className='ppMilkImage'>
        <img alt={filtered?.name} src={require('./images/milk.png')}/>
        </div>
        <div className='milkText'>
        <h3>{filtered?.name}</h3>
        <p>{filtered?.type}</p>
        <p>{filtered?.storage} litre</p>
        </div>
        {/* <Addtocart item={filtered}/> */}
      </li>
    </ul>
    </div>
    </>
  )
}

export default Productpage
