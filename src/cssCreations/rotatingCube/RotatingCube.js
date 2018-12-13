import React from 'react';
import CssCreation from 'components/cssCreation/CssCreation';

import './rotatingCube.scss';

const createSides = () => {
  const sides = [];
  for (let i=1; i<=6; i++) {
    sides.push(<div className={`side side-${i}`} key={i} />);
  }
  return sides;
};

export default () => (
  <CssCreation heading="Rotating cube">
    <div className="rotating-cube">
      <div className="cube">
        { createSides() }
      </div>
    </div>
  </CssCreation>
);
