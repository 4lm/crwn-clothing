import React from 'react';

import './CollectionPreview.scss';

import CollectionItem from 'components/collection/item/CollectionItem';

const CollectionPreview = ({ title, items }) => (
  <div className="container">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
