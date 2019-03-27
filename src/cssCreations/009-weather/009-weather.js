import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './009-weather.scss';

const createCraterDivs = (num = 10) =>
  createDivsWithNumberedClasses('crater', num);

const createDropDivs = (num = 20) => createDivsWithNumberedClasses('drop', num);

const createDivsWithNumberedClasses = (baseClass, num = 10) => {
  let divs = [];
  for (let i = 1; i <= num; i++) {
    divs.push(<div className={`${baseClass} ${baseClass}-${i}`} key={i} />);
  }
  return divs;
};

export default () => (
  <CssCreationWrapper heading="009 - Weather">
    <div className="weather">
      <div className="weather-window">
        <div className="moon">{createCraterDivs()}</div>
        <div className="drops">{createDropDivs()}</div>
        <div className="clouds" />
        <div className="hills">
          {createDivsWithNumberedClasses('hill-back', 2)}
          {createDivsWithNumberedClasses('hill-front', 3)}
        </div>
      </div>
      <div className="info">
        <p className="temperature-display">12&deg;</p>
        <div className="details-now">
          <p>Wind: E 7 km/h</p>
          <p>Humidity: 87%</p>
        </div>
        <div className="details-future">
          <p>Tue 21&deg; / 9&deg;</p>
          <p>Wed 23&deg; / 10&deg;</p>
        </div>
      </div>
    </div>
  </CssCreationWrapper>
);
