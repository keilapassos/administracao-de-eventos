import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const Products = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get("https://api.punkapi.com/v2/beers").then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Products.Provider value={{ products, setProducts, getProducts }}>
      {children}
    </Products.Provider>
  );
};

export const useProducts = () => useContext(Products);
