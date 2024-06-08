import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Career from './components/Career'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Career/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>

  );
};

export default App;
