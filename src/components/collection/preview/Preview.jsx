import React from 'react';

import './Preview.scss';

import CollectionItem from 'components/collection/item/Item';

const Preview = ({ title, items }) => (
  <div className="container">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, idx) => idx < 4)
        .map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
    </div>
  </div>
);

export default Preview;
