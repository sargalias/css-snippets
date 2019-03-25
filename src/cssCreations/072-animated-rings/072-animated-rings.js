import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './072-animated-rings.scss';

const numRings = 10;

const createRings = () => {
  const rings = [];
  for (let i=1; i<=numRings; i++)
    rings.push(<div key={i} className={`ring ring-${i}`}></div>);
  return rings;
};

export default () => (
  <CssCreationWrapper heading="072 - Animated Rings">
    <div className="animated-rings">
      { createRings() }
    </div>
  </CssCreationWrapper>
);
