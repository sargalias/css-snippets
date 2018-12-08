import React from 'react';
import './cssCreation.scss';

export default ({ heading, children }) => (
  <article className="css-creation">
    <h3 className="css-creation__heading">{ heading }</h3>
    { children }
  </article>
);
