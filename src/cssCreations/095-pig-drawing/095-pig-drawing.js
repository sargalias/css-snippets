import React from 'react';
import CssCreation from 'components/cssCreation/CssCreation';
import './095-pig-drawing.scss';

export default () => (
  <CssCreation heading="095 - Pig drawing" >
    <div className="pig-drawing">
      <div className="center">
        <div className="face">
          <div className="ears">
            <div className="ear ear-left" />
            <div className="ear ear-right" />
          </div>
          <div className="eyes">
            <div className="eye eye-left" />
            <div className="eye eye-right" />
          </div>
          <div className="nose">
            <div className="nostril nostril-left" />
            <div className="nostril nostril-right" />
          </div>
        </div>
      </div>
    </div>
  </CssCreation>
);
