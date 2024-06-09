import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Career from './components/Career'
import Academic from './components/Academic'
import Contact from './components/Contact'
import FlyFabi from './components/FlyFabi'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Career/>
      <Academic/>
      <Contact/>
      <FlyFabi/>
      <Footer/>
    </div>

  );
};

export default App;
