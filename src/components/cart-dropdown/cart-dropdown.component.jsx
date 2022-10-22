import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <span className="empty-message">Your cart is empty</span>
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
