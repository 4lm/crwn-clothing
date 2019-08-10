import React from 'react';

import './MenuDirectory.scss';
import MenuItem from 'components/menu/item/MenuItem';
import DIRECTORY_DATA from './MenuDirectory.data.js';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      items: DIRECTORY_DATA,
    };
  }

  render() {
    return (
      <div className="directory">
        {this.state.items.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
