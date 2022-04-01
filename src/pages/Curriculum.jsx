import React from 'react';
import Header from './components/Header';

//CSS
import '../assets/style/pages/Curriculum.css';
import Skills from './components/Skills';

function Curriculum() {
  return (
    <main className="containerPage">
      <Header/>
      <Skills/>
    </main>
  );
};

export default Curriculum;