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
    return (
      <div>
        <h1>SHOP PAGE</h1>
        {/* <Collection></Collection> */}
      </div>
    )
  }
}

export default Shop;
