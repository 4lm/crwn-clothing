import React from 'react';

import './Preview.scss';

const Preview = ({ title, items }) => (
  <div className="collection">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, idx) => idx < 4)
        .map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
    </div>
  </div>
);

export default Preview;
