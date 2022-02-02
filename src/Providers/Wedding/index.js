import { createContext, useState, useContext } from "react";

export const Wedding = createContext();

export const WeddingProvider = ({ children }) => {
  const [wedding, setWedding] = useState([]);

  const addWedding = (item) => {
    if (!wedding.includes(item)) {
      setWedding([...wedding, item]);
    }
  };

  const removeWedding = (item) => {
    const newList = wedding.filter((product) => product.id !== item.id);
    setWedding(newList);
  };

  return (
    <Wedding.Provider value={{ addWedding, removeWedding, wedding }}>
      {children}
    </Wedding.Provider>
  );
};

export const useWedding = () => useContext(Wedding);
