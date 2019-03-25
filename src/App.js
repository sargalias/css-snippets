import React from "react"
import { Helmet } from 'react-helmet';

import './global/global.scss';
import './global/variables.scss';
import Header from 'components/header';
import Footer from 'components/footer';
import CssCreationsList from 'components/cssCreationsList';

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>100 Days CSS | Spyros Argalias</title>
      <meta name="description" content="My attempt at 100 Days CSS, creating something different with CSS every day for 100 days." />
      <html lang="en" />
    </Helmet>

    <Header />
    <CssCreationsList />
    <Footer />
  </div>
);
