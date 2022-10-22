import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setCartIsOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartIsOpen] = useState(false);
  const value = { isCartOpen, setCartIsOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
