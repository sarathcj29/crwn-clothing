import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setCartIsOpen, cartCount } = useContext(CartContext);
  const toggleCartOpen = () => setCartIsOpen(!isCartOpen);

  // One way of doing it, but effective would be to add useEffect in cart.context
  // const cartItemsCount = cartItems.reduce(
  //   (accVal, _, currIndex) => accVal + cartItems[currIndex].quantity,
  //   0
  // );

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
