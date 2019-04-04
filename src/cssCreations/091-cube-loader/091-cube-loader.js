import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './091-cube-loader.scss';

export default () => (
  <CssCreationWrapper heading="091 - Cube loader">
    <div className="cube-loader">
      <div className="center">
        <div className="cube">
          <div className="side side-back" />
          <div className="side side-front" />
          <div className="side side-right" />
          <div className="side side-left" />
          <div className="side side-bottom" />
          <div className="side side-top" />
        </div>
      </div>
    </div>
  </CssCreationWrapper>
);
