import React from 'react';
import { IoIosArrowUp } from "react-icons/io";
import './App.scss';
import Hero from './Components/Hero/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Funfact from './Components/Funfact';
import Footer from './Components/Footer/Footer';

const App: React.FC = () => {
  const [showScrollToTop, setShowScrollToTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 800) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Testimonials/>
      <Funfact/>
      <Footer/>
      {showScrollToTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <IoIosArrowUp />
        </div>
      )}
    </>
  )
}

export default App
