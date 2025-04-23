import React, { createContext, useState } from "react";

export const BASKET = createContext();

function BasketContext({children}) {
  const [basket, setBasket] = useState([]);
 
  return <BASKET.Provider value={{basket, setBasket}}>
        {children}
    </BASKET.Provider>;
}

export default BasketContext;
