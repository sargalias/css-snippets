import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './080-flex-stripes.scss';

export default () => (
  <CssCreationWrapper heading="080 - Flex stripes">
    <div className="flex-stripes">
      <div className="stripe">
        <span className="text">
          First
        </span>
      </div>
      <div className="stripe">
        <span className="text">
          Second
        </span>
      </div>
      <div className="stripe">
        <span className="text">
          Third
        </span>
      </div>
      <div className="stripe">
        <span className="text">
        Fourth
        </span>
      </div>
    </div>
  </CssCreationWrapper>
);
