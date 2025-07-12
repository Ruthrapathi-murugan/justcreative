import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './Components/HeroSection';
import StatsSection from './Components/StatsSection';
import SpecializationSection from './Components/SpecializationSection';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ClientTestimonialsSection from './Components/ClientTestimonialsSection ';
import FaqSection from './Components/FaqSection';
import Footer from './Components/Footer';



function App() {
  
  return (
    <>
      <HeroSection/>
      <StatsSection/>
      <SpecializationSection/>
      <ClientTestimonialsSection/>
      <FaqSection/>
      <Footer/>
    </>
  )
}

export default App
