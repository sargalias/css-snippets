import React from 'react';
import CssCreation from 'components/cssCreation/CssCreation';
import './passwordInput.scss';

export default () => (
  <CssCreation heading="Password input">
    <div className="password-input">
      <input
        className="field overlapping-field input"
        type="text"
        placeholder={`Enter the word "password"`}
        pattern="password|Password"
        required
      />
      <div className="field overlapping-field key-heading">Secret Key</div>
      <div className="field key">MD5-SU3-CX8</div>
    </div>
  </CssCreation>
);
