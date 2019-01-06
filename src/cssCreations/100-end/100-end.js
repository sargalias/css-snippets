import React from 'react';
import CssCreation from 'components/cssCreation/CssCreation';
import './100-end.scss';

export default () => (
  <CssCreation heading="100 - End" >
    <div className="end">
      <div className="center">
        <div className="letter e">
          <div className="line e1" />
          <div className="line e2" />
          <div className="line e3" />
          <div className="line e4" />
        </div>
        <div className="letter n">
          <div className="line n1" />
          <div className="line n2" />
          <div className="line n3" />
          <div className="line n4" />
          <div className="line n5" />
          <div className="line n6" />
        </div>
        <div className="letter d">
          <div className="line d1" />
          <div className="semicircle-container d2-outer">
            <div className="d2-inner" />
          </div>
        </div>
      </div>
    </div>
  </CssCreation>
);
