import React from 'react';

import SHOP_DATA from './Shop.data';

import CollectionPreview from 'components/collection/preview/Preview';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop">
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
