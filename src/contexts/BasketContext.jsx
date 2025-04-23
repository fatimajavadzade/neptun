import React, { createContext, useState } from "react";

export const BASKET = createContext([]);

function BasketContext({children}) {
  const [basket, setbasket] = useState([]);
  const data = { basket, setbasket };
  return <BASKET.Provider value={data}>
        {children}
    </BASKET.Provider>;
}

export default BasketContext;
