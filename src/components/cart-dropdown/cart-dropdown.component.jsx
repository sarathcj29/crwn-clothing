import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
  const { cartItems, setCartIsOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutPage = () => {
    navigate('/checkout');
    setCartIsOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item}></CartItem>;
        })}
      </div>
      <Button onClick={goToCheckoutPage}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
