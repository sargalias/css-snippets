import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './063-hypnotic-ring.scss';

const createCircleDivs = (num = 50) =>
  Array.from({ length: num }).map((el, i) => (
    <div className={`circle circle-${i}`} key={i} />
  ));

const HypnoticRing = () => (
  <CssCreationWrapper heading="063 - Hypnotic ring">
    <div className="hypnotic-ring">
      <div className="ring-container">{createCircleDivs()}</div>
    </div>
  </CssCreationWrapper>
);

export default HypnoticRing;
