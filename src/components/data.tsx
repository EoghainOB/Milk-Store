import React, { useEffect, useState, createContext } from 'react'
import { cartTypes, ProductContextType, productTypes } from '../types';
import axios from 'axios';
import App from '../App';

export const ProductContext = createContext<ProductContextType | null>(null)

const Data = ({ children }: any) => {
    
    const [products, setProducts] = useState<productTypes[]>([]);

    useEffect(() => {
        axios
        .get('http://localhost:8080/api/milk')
        .then((response) => {
        setProducts([...response.data])
        })
    }, [])
   
    const [cart, setCart] = useState<cartTypes[]>([]);

    useEffect(() => {
        axios
        .get('http://localhost:8080/cart')
        .then((response) => {
            setCart([...response.data])
        })
    }, [cart])

    let types: string[] = [... new Set(products.map(product => product.type))];
    
  return (
    <ProductContext.Provider value={{ products, cart, types }}>
        <App />
    </ProductContext.Provider>
  )
}

export default Data