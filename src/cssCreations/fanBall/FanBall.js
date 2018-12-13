import React from 'react';
import CssCreation from 'components/cssCreation/CssCreation';
import './fanBall.scss';

const createCircles = (numCircles=4) => {
  const circles = [];
  for (let i=1; i<=numCircles; i++) {
    circles.push(<div className={`circle circle-${i}`} key={i} />);
  }
  return circles;
};

export default () => (
  <CssCreation heading="Fan ball">
    <div className="fan-ball">
      <div className="circle-container">
        { createCircles(6) }
      </div>
    </div>
  </CssCreation>
)
