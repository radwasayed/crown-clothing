import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/strip-button/strip-button.component";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    CheckoutBlockContainer,
    CheckoutTotal,
    CheckoutWarning
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <CheckoutBlockContainer>
                <span>Products</span>
            </CheckoutBlockContainer>
            <CheckoutBlockContainer>
                <span>Description</span>
            </CheckoutBlockContainer>
            <CheckoutBlockContainer>
                <span>Quantity</span>
            </CheckoutBlockContainer>
            <CheckoutBlockContainer>
                <span>Price</span>
            </CheckoutBlockContainer>
            <CheckoutBlockContainer>
                <span>Remove</span>
            </CheckoutBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem =>(
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }

        <CheckoutTotal>
            <span>TOTAL: ${total}</span>
        </CheckoutTotal>
        <CheckoutWarning>
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </CheckoutWarning>
        <StripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
