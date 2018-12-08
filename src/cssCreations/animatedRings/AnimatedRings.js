import React from 'react';
import CssCreation from 'components/cssCreation/CssCreation';
import './animatedRings.scss';

const numRings = 10;

const createRings = () => {
  const rings = [];
  for (let i=1; i<=numRings; i++)
    rings.push(<div key={i} className={`ring ring-${i}`}></div>);
  return rings;
};

export default () => (
  <CssCreation heading="Animated Rings">
    <div className="animated-rings">
      { createRings() }
    </div>
  </CssCreation>
);
