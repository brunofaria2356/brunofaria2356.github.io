import React from 'react';
import Header from './components/Header';

//CSS
import '../assets/style/pages/Curriculum.css';
import Skills from './components/Skills';
import AboutUs from './components/AboutUs';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function Curriculum() {
  return (
    <main className="containerPage">
      <Header/>
      <AboutUs/>
      <Skills/>
      <Certificates/>
      <Footer/>
    </main>
  );
};

export default Curriculum;