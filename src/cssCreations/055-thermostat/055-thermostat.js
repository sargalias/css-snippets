import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './055-thermostat.scss';

const Thermostat = () => (
  <CssCreationWrapper heading="055 - Thermostat">
    <div className="thermostat">
      <div className="center">
        <div className="gauge" />
        <div className="control">
          <div className="temperature-pointer" />
          <div className="temperature-reading">
            <span className="temperature-value first">
              19<span className="degree-symbol">&deg;</span>
            </span>
            <span className="temperature-value second">
              21<span className="degree-symbol">&deg;</span>
            </span>
          </div>
          <div className="room">Bedroom</div>
        </div>
      </div>
    </div>
  </CssCreationWrapper>
);

export default Thermostat;
