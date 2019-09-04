import React from 'react';
import { connect } from 'react-redux';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { withRouter } from 'react-router-dom'
import {
    CartDropdownContainer,
    CartItemsContainer,
    CartDropdownButton,
    CartEmptyMessage
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <CartEmptyMessage className="empty-message">Your cart is empty</CartEmptyMessage>
                )
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
);


const mapStateToProps = state => ({
    cartItems : selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
