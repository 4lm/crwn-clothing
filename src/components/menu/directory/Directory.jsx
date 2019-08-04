import React, { Component } from 'react';

import './Directory.scss';
import DIRECTORY_DATA from './Directory.data.js';

import MenuItem from 'components/menu/item/Item';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      items: DIRECTORY_DATA
    }
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
