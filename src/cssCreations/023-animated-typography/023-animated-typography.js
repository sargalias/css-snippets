import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './023-animated-typography.scss';

export default () => (
  <CssCreationWrapper heading="023 - Animated typography">
    <div className="animated-typography">
      <div className="circle" />
      <div className="line line-left" />
      <div className="line line-right" />
      <div className="bracket bracket-left" />
      <div className="bracket bracket-right" />
      <div className="text text-small text-top">Have</div>
      <div className="text text-big">Process</div>
      <div className="text text-small text-bottom">Goals</div>
    </div>
  </CssCreationWrapper>
);
