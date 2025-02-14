import React, { createContext, useState } from "react";

export const MycartContext = createContext(null);

const Context = ({ children }) => {
  const [cart, setcart] = useState(0);

  const addToCart = () => setcart(cart + 1);
  const decrement = () => setcart(cart - 1);

  return (
    <>
      <MycartContext.Provider value={{ cart, addToCart, decrement }}>
        {children}
      </MycartContext.Provider>
    </>
  );
};

export default Context;
