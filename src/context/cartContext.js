import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [producto, setProdcuto] = useState(1);
  console.log("Producto Context: " + producto);

  return (
    <CartContext.Provider value={setProdcuto}>{children}</CartContext.Provider>
  );
};
