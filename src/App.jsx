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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from './Components/Testimonials';
import ClientsCarousel from './Components/ClientCrousal';
import BlogSection from './Components/BlogSection';
import FaqSection from './Components/FaqSection';
import Footer from './Components/Footer';
function App() {
  return (
    <div className='main min-h-screen overflow-hidden'>
<Navbar/>
<HeroSection/>
<ZeroSection/>
<DigitalSchool/>
<SchoolSocialMedia/>
<SchoolTechnologies/>
<SchoolAdvisorySection/>
<AboutSimsin/>
<SimsinServices/>  
<Testimonials/>
<ClientsCarousel/>
<BlogSection/>
<FaqSection/>
<Footer/>
    </div>

  )
}

export default App
