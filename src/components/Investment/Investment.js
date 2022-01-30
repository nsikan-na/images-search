import React from 'react';
import Form from './Form'
import NavBar from './NavBar';
import Results from './Results'
import Ad from './Ad'
import CTA from './CTA'
import Footer from './Footer'

export default function Investment() {
  return <div>
      <NavBar/>
      <h1>Investment Calculator</h1>
      <p>Put your current investment totals, your contributions and your annual rate of return into the investment calculator, and we'll show you how much you can expect to have in your investment portfolio over time.</p>
      <Form/>
      <Results />
      <Ad/>
      <CTA />
      <Footer/>
  </div>;
}
