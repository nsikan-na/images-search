import React from 'react';
import Form from './Form'
import NavBar from './NavBar';
import Results from './Results'
import Ad from './Ad'
import CTA from './CTA'
import Footer from './Footer'
import Header from './Header'

export default function Investment() {
  return <div>
      <NavBar/>
      <Header/>
      <Form/>
      <Results />
      <Ad/>
      <CTA />
      <Footer/>
  </div>;
}
