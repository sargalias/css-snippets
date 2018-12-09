import React from 'react';
import CssCreation from 'components/cssCreation/CssCreation';
import './rollingBall.scss';

export default () => (
  <CssCreation heading="Rolling Ball">
    <div className="rolling-ball">
      <div className="ball-rolling-around">
        <div className="outer-ring">
          <div className="anchor-ring">
            <div className="ball" />
          </div>
        </div>
      </div>
    </div>
  </CssCreation>
);
