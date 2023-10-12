
import React, { useEffect } from 'react';
import { useState , createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({children}) =>{
    const [product , setProduct]  = useState(()=>{
        const localStorageProduct = localStorage.getItem('product');
        return localStorageProduct ?  JSON.parse(localStorageProduct) : [];
    });
    const [addToCart , setAddToCart] = useState(()=>{
        const localStorageCart = localStorage.getItem("cartItem");
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    });

    useEffect(()=>{
        localStorage.setItem("cartItem", JSON.stringify(addToCart));
    },[addToCart])

    useEffect(()=>{
        localStorage.setItem('product', JSON.stringify(product));
    },[product])


    return (
        <ProductContext.Provider value={{
            product:product,
            setProduct:setProduct,
            addToCart:addToCart,
            setAddToCart:setAddToCart
        }}>
            {children}
        </ProductContext.Provider>
    )
}