import React from 'react';
import {
    CartItemContainer,
    CartItemDetailsContainer,
    CartItemName,
    CartItemImage
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl,price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item"/>
        <CartItemDetailsContainer>
            <CartItemName className="name">{name}</CartItemName>
            <span className="price">
                {quantity} * ${price}
            </span>
        </CartItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;
