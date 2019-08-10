import React from 'react';

import CollectionPreview from 'components/collection/preview/CollectionPreview';
import SHOP_DATA from './PageShop.data';

class PageShop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
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

export default PageShop;
