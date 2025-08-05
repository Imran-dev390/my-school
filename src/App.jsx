import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import './index.css';
import HeroSection from './Components/HeroSection';
import ZeroSection from './Components/ZeroSection';
import DigitalSchool from './Components/DigitalSchool';
import SchoolSocialMedia from './Components/SchoolSocailMedia';
import SchoolTechnologies from './Components/SchoolTechnologies';
import SchoolAdvisorySection from './Components/SchoolAdvisory';
import AboutSimsin from './Components/About';
import SimsinServices from './Components/Services';
function App() {
  return (
    <div className='main min-h-screen w-full'>
      <Navbar/>
    <HeroSection/>
    <ZeroSection/>
<DigitalSchool/>
<SchoolSocialMedia/>
<SchoolTechnologies/>
<SchoolAdvisorySection/>
<AboutSimsin/>
  <SimsinServices/>  
    </div>

  )
}

export default App
