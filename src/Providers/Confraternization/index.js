import { createContext, useState, useContext } from "react";

export const Confraternization = createContext();

export const ConfraternizationProvider = ({ children }) => {
  const [confraternization, setConfraternization] = useState([]);

  const addConfraternization = (item) => {
    if (!confraternization.includes(item)) {
      setConfraternization([...confraternization, item]);
    }
  };

  const removeConfraternization = (item) => {
    const newList = confraternization.filter(
      (product) => product.id !== item.id
    );
    setConfraternization(newList);
  };

  return (
    <Confraternization.Provider
      value={{
        addConfraternization,
        removeConfraternization,
        confraternization
      }}
    >
      {children}
    </Confraternization.Provider>
  );
};

export const useConfraternization = () => useContext(Confraternization);
