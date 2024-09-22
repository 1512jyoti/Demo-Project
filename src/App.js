import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Service from './components/service/Service';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Testimonials from './components/testimonials/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Service />
      <Testimonials/>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
