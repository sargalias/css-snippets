import React from 'react';
import './cssCreationsList.scss';

import AnimatedRings from 'cssCreations/animatedRings/AnimatedRings';
import RollingBall from 'cssCreations/rollingBall/RollingBall';
import RadioSelection from 'cssCreations/radioSelection/RadioSelection';

export default () => (
  <main>
    <section className="css-creations-list">
      <header className="css-creations-list__header">
        <h2 className="css-creations-list__heading">CSS Creations</h2>
      </header>
      <div className="css-creations-list__list">
        <RadioSelection />
        <RollingBall />
        <AnimatedRings />
      </div>
    </section>
  </main>
);
