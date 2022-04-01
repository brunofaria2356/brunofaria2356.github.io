import React from 'react';

//Imagens
import PhotoProfile from '../../assets/images/perfil.jpg';

//Icones
import IconGitHub from '../../assets/images/iconGitHub.png';
import IconLinkedIn from '../../assets/images/iconLinkedIn.png';
import IconWhatsApp from '../../assets/images/iconWhatsApp.png';

function HeaderCard() {
  return (
    <div className='HeaderCard'>
      <img src={PhotoProfile} alt="Profile" />
      <div>
        <div className='containerCard'>
          <div className='containerCardTitle'>
            <h2>Eu sou Bruno Faria</h2>
            <p>Desenvolvedor Web Front-end</p>
          </div>
          <div className='containerCardInfos'>
            <div className='containerP'>
              <p>Idade:</p>
              <p>E-mail</p>
              <p>Contato:</p>
            </div>
            <div className='containerInfosCard'>
              <span>26</span>
              <a href="mailto:brunofaria.dev01@gmail.com">brunofaria.dev01@gmail.com</a>
              <a href="tel:+55 34 988587835">34 988587835</a>
            </div>
          </div>
        </div>
        <div className='containerMidias'>
            <button className='btnSocialCard' type='button'>
              <img src={IconGitHub} alt='IconGitHub' />
            </button>
            <button className='btnSocialCard' type='button'>
              <img src={IconLinkedIn} alt='IconLinkedIn' />
            </button>
            <button className='btnSocialCard' type='button'>
              <img src={IconWhatsApp} alt='IconWhatsApp' />
            </button>
        </div>
      </div>
    </div>
  )
};

export default HeaderCard;