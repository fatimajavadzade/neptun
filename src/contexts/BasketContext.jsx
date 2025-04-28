import React, { createContext, useState } from "react";

export const BASKET = createContext();

function BasketContext({children}) {
  const [basket, setBasket] = useState([]);
 
  const addToBasket = (item) => {
    setBasket((prev) => [...prev, item]);
  };

  return <BASKET.Provider value={{basket, setBasket, addToBasket}}>
        {children}
    </BASKET.Provider>;
}

export default BasketContext;
