import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setCartIsOpen, cartCount } = useContext(CartContext);
  const toggleCartOpen = () => setCartIsOpen(!isCartOpen);

  // One way of doing it, but effective would be to add useEffect in cart.context
  // const cartItemsCount = cartItems.reduce(
  //   (accVal, _, currIndex) => accVal + cartItems[currIndex].quantity,
  //   0
  // );

  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
