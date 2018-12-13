import React from 'react';
import './cssCreationsList.scss';

import AnimatedRings from 'cssCreations/animatedRings/AnimatedRings';
import RollingBall from 'cssCreations/rollingBall/RollingBall';
import RadioSelection from 'cssCreations/radioSelection/RadioSelection';
import FanBall from 'cssCreations/fanBall/FanBall';
import PasswordInput from 'cssCreations/passwordInput/PasswordInput';
import RotatingCube from 'cssCreations/rotatingCube/RotatingCube';

export default () => (
  <main>
    <section className="css-creations-list">
      <header className="css-creations-list__header">
        <h2 className="css-creations-list__heading">CSS Creations</h2>
      </header>
      <div className="css-creations-list__list">
        <RotatingCube />
        <PasswordInput />
        <FanBall />
        <RadioSelection />
        <RollingBall />
        <AnimatedRings />
      </div>
    </section>
  </main>
);
