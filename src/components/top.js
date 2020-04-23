import React from 'react';
import Header from '../containers/header';
import Footer from './footer';
import Body from '../containers/body';

export default function top() {
  return (
    <div className="Top">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
