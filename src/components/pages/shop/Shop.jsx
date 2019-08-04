import React, { Component } from 'react';

import SHOP_DATA from './Shop.data';

import Collection from 'components/collection/Collection';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return (
      <div className="shop">
        {collections.map(({id, ...otherProps }) => (
          <Collection key={id} {...otherProps}/>
        ))}
      </div>
    );
  }
}

export default Shop;
