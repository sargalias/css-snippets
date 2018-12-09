import React from 'react';
import CssCreation from 'components/cssCreation/CssCreation';
import './rollingBall.scss';

export default () => (
  <CssCreation heading="Rolling Ball">
    <div className="rolling-ball">
      <div className="outer-ring">
        <div className="anchor-ring">
          <div className="center-ring"></div>
          <div className="ball ball-1" />
          <div className="ball ball-2" />
          <div className="ball ball-3" />
          <div className="ball ball-4" />
          <div className="center-point"></div>
        </div>
      </div>
    </div>
  </CssCreation>
);
