import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './076-password-input.scss';

export default () => (
  <CssCreationWrapper heading="076 - Password input">
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
  </CssCreationWrapper>
);
