import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './058-3d-sphere.scss';

const createCircleDivs = (num = 3, letter) =>
  Array.from({ length: num }).map((el, i) => (
    <div
      className={`slice slice-${i + 1} slice-${i + 1}-${letter}`}
      key={`${i + 1}-${letter}`}
    />
  ));

const ThreeDSphere = () => (
  <CssCreationWrapper heading="058 - 3D sphere">
    <div className="three-d-sphere">
      <div className="center">
        <div className="circle">
          {createCircleDivs(9, 'a').reverse()}
          <div className="slice slice-0" />
          {createCircleDivs(9, 'b')}
        </div>
      </div>
    </div>
  </CssCreationWrapper>
);

export default ThreeDSphere;
