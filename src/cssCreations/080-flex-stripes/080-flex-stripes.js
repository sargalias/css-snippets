import React from 'react';
import CssCreation from 'components/cssCreation/CssCreation';
import './080-flex-stripes.scss';

export default () => (
  <CssCreation heading="080 Flex stripes">
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
  </CssCreation>
);
