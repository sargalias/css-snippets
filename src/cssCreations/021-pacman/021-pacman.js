import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './021-pacman.scss';

export default () => (
  <CssCreationWrapper heading="021 - Pacman">
    <div className="pacman">
      <div className="pacman-pacman">
        <div className="semicircle semicircle-top" />
        <div className="semicircle semicircle-bottom" />
        <div className="eye" />
      </div>
      <div className="orbs">
        <div className="orb" />
        <div className="orb" />
        <div className="orb" />
        <div className="orb" />
      </div>
    </div>
  </CssCreationWrapper>
);
