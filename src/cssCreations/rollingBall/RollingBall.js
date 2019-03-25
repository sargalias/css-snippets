import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './rollingBall.scss';

export default () => (
  <CssCreationWrapper heading="Rolling Ball">
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
  </CssCreationWrapper>
);
