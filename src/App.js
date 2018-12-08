import React from "react"

import './global/global.scss';
import './global/variables.scss';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import CssCreationsList from 'components/cssCreationsList/CssCreationsList';

export default () => (
  <div>
    <Header />
    <CssCreationsList />
    <Footer />
  </div>
);
