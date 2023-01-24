import React, { useEffect } from 'react';
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContextType } from '../types';
import { ProductContext } from './data'
import Filter from './filter';
import Product from './product';
import ReactPaginate from "react-paginate";

const Productlist = () => {
  
  const { products } = useContext(ProductContext) as ProductContextType
  const [ search, setSearch ] = useState<string>('')
  const [ filter, setFilter ] = useState<string>('all')
  
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [filteredAmount, setFilteredAmount] = useState<number>(products.length / 9);
  const [itemsPerPage] = useState<number>(9);

  const pageCount = filter === 'all' ? Math.ceil(products.length / itemsPerPage) : Math.ceil(filteredAmount / itemsPerPage)
  const endOffset = itemOffset + itemsPerPage;

  useEffect(() => {
    const filteredProducts = products.filter(product => product.type === filter)
    setFilteredAmount(filteredProducts.length)
  },[products, filter])

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };
    
  return (
    <div className="milkContainer">
      <>
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
      } return false
    }).slice(itemOffset, endOffset).map((item) => (
      <div key={item.id} className='milk'>
        <Link to={`/product/${item?.id}`}>
          <Product products={item}/> 
        </Link>
      </div>
    ))}
      {pageCount > 1 && <div className='paging'>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={Math.ceil(pageCount)}
        previousLabel="< Previous"
        //@ts-ignore
        renderOnZeroPageCount={null}/>
      </div>}
    </>
    </div> 
  )
}

export default Productlist
