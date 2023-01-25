import React from 'react';
import { useContext } from 'react'
import { ProductContextType } from '../types';
import { ProductContext } from './data'

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Filter = (set: Props) => {

  const { types } = useContext(ProductContext) as ProductContextType

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    set.setFilter(e.target.value);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    set.setSearch(e.target.value);
  };

  return (
    <>
    <div className='filter'>
      <div className='navForm'>
        <div className='navSearchBar'>
        <input type="text" className='search-input' placeholder='Search' onChange={handleInput}/>
        </div>
        <div className='navDropdown'>
        <select onChange={handleChange}>
          <option value="all">Filter: All</option>
          {types.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
          ))}
        </select>
        </div>
      </div>
    </div>
    </>
  );
};

export default Filter;
