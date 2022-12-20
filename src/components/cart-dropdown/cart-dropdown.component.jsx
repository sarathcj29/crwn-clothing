import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropDownContainer, CartEmptyMessage, CartItems } from './cart-dropdown.styles';

const CartDropDown = () => {
  const { cartItems, setCartIsOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutPage = () => {
    navigate('/checkout');
    setCartIsOpen(false);
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item}></CartItem>;
          })
        ) : (
          <CartEmptyMessage>Your cart is empty</CartEmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutPage}>Go To Checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
