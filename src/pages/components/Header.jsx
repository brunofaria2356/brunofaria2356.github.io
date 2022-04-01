import React from 'react';

//Componentes
import HeaderSuperior from '../components/HeaderSuperior';
import HeaderCard from '../components/HeaderCard';

//CSS
import '../../assets/style/components/Header.css';

function Header() {
  return (
    <header>
      <HeaderSuperior/>
      <HeaderCard/>
    </header>
  );
};

export default Header;