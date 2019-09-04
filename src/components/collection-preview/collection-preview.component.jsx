import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";
import {
    PreviewContainer,
    CollectionPreviewContainer,
    PreviewTitleContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, }) => (
    <CollectionPreviewContainer>
        <PreviewTitleContainer>{title.toUpperCase()}</PreviewTitleContainer>
        <PreviewContainer>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;
