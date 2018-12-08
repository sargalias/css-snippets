import React from 'react';
import './header.scss';

export default () => (
  <header className="header">
    <div className="header__container">
        <h1 className="header__heading">100 Days CSS</h1>
        <p className="header__subheading"
        >My attempt at the <cite><a href="https://100dayscss.com/" target="_blank" rel="noopener noreferrer">100 Days CSS</a></cite> challenge
        </p>
    </div>
  </header>
);