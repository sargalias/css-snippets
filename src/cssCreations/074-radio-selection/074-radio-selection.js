import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './074-radio-selection.scss';

const createRadioInputs = (numInputs = 4) => {
  const inputs = [];
  for (let i=1; i<=numInputs; i++) {
    const input = (
      <div key={i} className="radio-selection__form-group">
        <input
          type="radio"
          name="radio"
          value={i}
          id={i}
          className="radio-selection__input"
          defaultChecked={i === 1}
        />
        <label
          htmlFor={i}
          className="radio-selection__label"
        >{i}</label>
      </div>
    );
    inputs.push(input);
  }
  return inputs;
};

export default () => (
  <CssCreationWrapper heading="074 - Radio selection">
    <div className="radio-selection">
      { createRadioInputs() }
    </div>
  </CssCreationWrapper>
);
