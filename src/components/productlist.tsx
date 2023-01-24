import React from 'react';
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContextType, productTypes } from '../types';
import { ProductContext } from './data'
import Filter from './filter';
import Product from './product';
import ReactPaginate from "react-paginate";

const Productlist = () => {
  
  const { products } = useContext(ProductContext) as ProductContextType
  const [ search, setSearch ] = useState<string>('')
  const [ filter, setFilter ] = useState<string>('all')
  const [ filteredProducts, setFilteredProducts ] = useState<productTypes[]>([])
  
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(9);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  //@ts-ignore
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };
    
    return (
      <div className="milkContainer">
      <Filter setFilter={setFilter} setSearch={setSearch}/>
      {currentItems.filter((milk) => {
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
        <div className='paging'>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< Previous"
          //@ts-ignore
          renderOnZeroPageCount={null}/>
        </div>
      </div>
    )
}

export default Productlist
