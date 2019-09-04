import React from 'react';
import { connect } from 'react-redux';
import { addItem } from "../../redux/cart/cart.actions";

import {
    CollectionItemContainer,
    CollectionItemImage,
    CollectionItemFooterContainer,
    CollectionItemNameContainer,
    CollectionItemPriceContainer,
    AddButton
} from './collection-item.styles';

const CollectionItem = ({ item, addItem}) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <CollectionItemImage
                className="image"
                imageUrl={imageUrl}
            />
            <CollectionItemFooterContainer>
                <CollectionItemNameContainer>{name}</CollectionItemNameContainer>
                <CollectionItemPriceContainer>${price}</CollectionItemPriceContainer>
            </CollectionItemFooterContainer>
            <AddButton
                onClick={() => addItem(item)}
                inverted
            > Add to cart </AddButton>
        </CollectionItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);
