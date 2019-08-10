import React from 'react';

import './MenuDirectory.scss';
import MenuItem from 'components/menu/item/MenuItem';
import DIRECTORY_DATA from './MenuDirectory.data';

class MenuDirectory extends React.Component {
  constructor() {
    super();

    this.state = {
      items: DIRECTORY_DATA,
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div className="directory">
        {items.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default MenuDirectory;
