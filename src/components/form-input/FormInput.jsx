import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} />
  </div>
);

export default FormInput;
