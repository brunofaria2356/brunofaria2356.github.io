import React from 'react';

//Icones
import IconGitHub from '../../assets/images/iconGitHub.png';
import IconLinkedIn from '../../assets/images/iconLinkedIn.png';
import IconWhatsApp from '../../assets/images/iconWhatsApp.png';

function HeaderSuperior() {
  return (
    <div className='HeaderSuperior'>
        <div className='containerTitle'>
          <h1>BRUNO FARIA</h1>
          <h2>Front-end Developer</h2>
        </div>
        <div className='containerSocial'>
          <button className='btnSocial' type='button'>
            <img src={IconGitHub} alt='IconGitHub' />
          </button>
          <button className='btnSocial' type='button'>
            <img src={IconLinkedIn} alt='IconLinkedIn' />
          </button>
          <button className='btnSocial' type='button'>
            <img src={IconWhatsApp} alt='IconWhatsApp' />
          </button>
        </div>
    </div>
  );
};

export default HeaderSuperior;