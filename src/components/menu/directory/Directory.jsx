import React from 'react';

import './Directory.scss';
import MenuItem from 'components/menu/item/Item';
import DIRECTORY_DATA from './Directory.data.js';

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
