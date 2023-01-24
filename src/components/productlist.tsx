import React from 'react';
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContextType } from '../types';
import { ProductContext } from './data'
import Filter from './filter';
import Product from './product';

const Productlist = () => {
  
  const { products, types } = useContext(ProductContext) as ProductContextType
  const [ search, setSearch ] = useState<string>('')
  const [ filter, setFilter ] = useState<string>('all')
    
    return (
    <>
    <div className="milkContainer">
    <Filter setFilter={setFilter} setSearch={setSearch}/>
    {products.filter((milk) => {
      if(filter === 'all') {
      return milk
    } else {
      if(milk.type.includes(filter)) {
        return milk
      }
    } return false
    }).filter(item => {
      if(item.name.toLowerCase().includes(search.toLowerCase())) {
      return item
      }
    }).map((item) => (
      <div className='milk'>
        <Link to={`/product/${item?.id}`}>
          <Product products={item}/> 
        </Link>
        </div>
      ))}
      </div>
    </>
    )
}

export default Productlist
