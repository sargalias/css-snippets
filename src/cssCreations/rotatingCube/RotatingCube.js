import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';

import './rotatingCube.scss';

const createSides = () => {
  const sides = [];
  for (let i=1; i<=6; i++) {
    sides.push(<div className={`side side-${i}`} key={i} />);
  }
  return sides;
};

export default () => (
  <CssCreationWrapper heading="Rotating cube">
    <div className="rotating-cube">
      <div className="cube">
        { createSides() }
      </div>
    </div>
  </CssCreationWrapper>
);
