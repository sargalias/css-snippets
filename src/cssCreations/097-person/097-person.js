import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './097-person.scss';

export default () => (
  <CssCreationWrapper heading="097 - Person" >
    <div className="person">
      <div className="container">
        <div className="head" />
        <div className="body">
          <div className="arms">
            <div className="arm-upper arm-upper-left">
              <div className="arm-lower arm-lower-left" />
            </div>
            <div className="arm-upper arm-upper-right">
              <div className="arm-lower arm-lower-right" />
            </div>
          </div>
          <div className="legs">
            <div className="leg leg-left"/>
            <div className="leg leg-right"/>
          </div>
        </div>
      </div>
    </div>
  </CssCreationWrapper>
);
