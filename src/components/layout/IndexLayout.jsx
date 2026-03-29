import * as React from 'react';

import '../../css/main.css';
import Footer from '../fragment/Footer';
import Header from '../fragment/Header';

export default function IndexLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
