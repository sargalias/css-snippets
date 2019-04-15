import React from 'react';

const createDivsWithNumberedClasses = (baseClass, num = 10) =>
  Array.from({ length: num }).map((el, i) => (
    <div className={`${baseClass} ${baseClass}-${i + 1}`} key={i + 1} />
  ));

export { createDivsWithNumberedClasses };
