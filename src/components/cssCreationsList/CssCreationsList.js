import React from 'react';
import './cssCreationsList.scss';

import AnimatedRings from 'cssCreations/072-animated-rings/072-animated-rings';
import RollingBall from 'cssCreations/rollingBall/RollingBall';
import RadioSelection from 'cssCreations/074-radio-selection/074-radio-selection';
import FanBall from 'cssCreations/fanBall/FanBall';
import PasswordInput from 'cssCreations/076-password-input/076-password-input';
import RotatingCube from 'cssCreations/rotatingCube/RotatingCube';
import BlockDance from 'cssCreations/079-block-dance/079-block-dance';
import FlexStripes from 'cssCreations/080-flex-stripes/080-flex-stripes';
import PigDrawing from 'cssCreations/095-pig-drawing/095-pig-drawing';
import Person from 'cssCreations/097-person/097-person';

export default () => (
  <main>
    <section className="css-creations-list">
      <header className="css-creations-list__header">
        <h2 className="css-creations-list__heading">CSS Creations</h2>
      </header>
      <div className="css-creations-list__list">
        <Person />
        <PigDrawing />
        <FlexStripes />
        <BlockDance />
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
