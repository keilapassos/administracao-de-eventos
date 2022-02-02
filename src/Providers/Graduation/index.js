import { createContext, useState, useContext } from "react";

export const Graduation = createContext();

export const GraduationProvider = ({ children }) => {
  const [graduation, setGraduation] = useState([]);

  const addGraduation = (item) => {
    if (!graduation.includes(item)) {
      setGraduation([...graduation, item]);
    }
  };

  const removeGraduation = (item) => {
    const newList = graduation.filter((product) => product.id !== item.id);
    setGraduation(newList);
  };

  return (
    <Graduation.Provider
      value={{ addGraduation, removeGraduation, graduation }}
    >
      {children}
    </Graduation.Provider>
  );
};

export const useGraduation = () => useContext(Graduation);
