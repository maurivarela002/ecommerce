import { createContext, useState, useContext } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [producto, setProdcuto] = useState([]);
  console.log("Producto Context: " + producto);

  const isInCart = id => {
    return producto.some((obj) => obj.item.id === id )
  }

  const addItem = (item, quantity) => {
    if(producto.length > 0){
      if(isInCart(item.id)){
        let posCart = producto.findIndex(obj => obj.item.id === item.id)
        let newCart = producto
        newCart[posCart].quantity += quantity;
        setProdcuto(newCart);
      }else setProdcuto( [...producto, {item, quantity}] );
    }
    else setProdcuto([{item,quantity}]);
  }

  const removeItem = (id) =>{
    setProdcuto(producto.filter( obj => obj.item.id !== id ) )
  }

  const clear = () =>{
    setProdcuto([])
  }

  return (
    <CartContext.Provider value={{setProdcuto, addItem, removeItem, clear}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error('useCartContext error');
  return context;
};
// producto = [
//   {
//     item: {id, nombre, foto, precio},
//     quantity: 1
//   }
// ]