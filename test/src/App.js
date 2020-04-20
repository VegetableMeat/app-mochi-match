import React from 'react';
import './App.css';
import Header from './containers/Header';
import Footer from './components/Footer';
import Body from './components/Body';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
