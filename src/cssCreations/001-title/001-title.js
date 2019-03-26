import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './001-title.scss';

export default () => (
  <CssCreationWrapper heading="001 - Title">
    <div className="title">
      <div className="number">
        <div className="one">
          <div className="one-one"></div>
          <div className="one-two"></div>
        </div>
        <div className="zero zero-one" />
        <div className="zero zero-two" />
      </div>
      <div className="text days">DAYS</div>
      <div className="text challenge">CSS CHALLENGE</div>
    </div>
  </CssCreationWrapper>
);
