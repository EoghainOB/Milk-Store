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
        <form className="form-filter">
          <label>Search: </label>
          <input type="text" className='search-input' onChange={handleInput}/>
          <label>Filter: </label>
          <select onChange={handleChange}>
            <option value="all">All</option>
            {types.map(option => (
              <option value={option}>
                {option}
              </option>
            ))}
          </select>
        </form>
    </div>
    </>
  );
};

export default Filter;
