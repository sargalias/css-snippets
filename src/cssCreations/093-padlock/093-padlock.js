import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import { createDivsWithNumberedClasses } from 'utilities/utility';
import './093-padlock.scss';

const createDivsWithNumbers = (num = 8) =>
  Array.from({ length: num }).map((el, i) => (
    <div className={`number number-${i + 1}`} key={i}>
      {i * 5}
    </div>
  ));

const Padlock = () => (
  <CssCreationWrapper heading="093 - Padlock">
    <div className="padlock">
      <div className="shackle" />
      <div className="body">
        <div className="lock">
          {createDivsWithNumberedClasses('line', 40)}
          {createDivsWithNumbers(8)}
          <div className="knob" />
        </div>
      </div>
    </div>
  </CssCreationWrapper>
);

export default Padlock;
