import React from 'react';

//Imagens
import PhotoProfile from '../../assets/images/perfil.jpg';

//Icones
import IconGitHub from '../../assets/images/iconGitHub.png';
import IconLinkedIn from '../../assets/images/iconLinkedIn.png';
import IconWhatsApp from '../../assets/images/iconWhatsApp.png';

function HeaderCard() {
  
  const target = '_blank'
  const gitHub = 'https://github.com/brunofaria2356';
  const eMail = 'mailto:brunofaria.dev01@gmail.com';
  const contato = 'tel:+55 34 988587835';
  const linkedIn = 'https://www.linkedin.com/in/bruno-faria-012a35192/';

  function redirectGit(e){
    const git = 'https://github.com/brunofaria2356';
    const link = 'https://www.linkedin.com/in/bruno-faria-012a35192/';
    const whats = 'https://contate.me/brunofaria';
    if (e.target.id === 'github') {
      return window.open(git)
    } if (e.target.id === 'linkedIn') {
      return window.open(link)
    } 
    window.open(whats)
  }

  return (
    <div className='HeaderCard'>
      <img src={PhotoProfile} alt="Profile" />
      <div>
        <div className='containerCard'>
          <div className='containerCardTitle'>
            <h2>Bruno Faria</h2>
            <p>Desenvolvedor Web Front-end</p>
          </div>
          <div className='containerCardInfos'>
            <div className='containerP'>
              <p>Idade:</p>
              <p>E-mail</p>
              <p>Contato:</p>
              <p>LinkdIn:</p>
              <p>GitHub:</p>
            </div>
            <div className='containerInfosCard'>
              <span>26</span>
              <a href={eMail} target={target}>brunofaria.dev01@gmail.com</a>
              <a href={contato} target={target}>34 988587835</a>
              <a href={linkedIn} target={target}>https://www.linkedin.com/in/bruno-faria-012a35192/</a>
              <a href={gitHub} target={target}>https://github.com/brunofaria2356</a>
            </div>
          </div>
        </div>
        <div className='containerMidias'>
            <button className='btnSocialCard' onClick={redirectGit} type='button'>
              <img id='github' src={IconGitHub} alt='IconGitHub' />
            </button>
            <button className='btnSocialCard' onClick={redirectGit} type='button'>
              <img id='linkedIn' src={IconLinkedIn} alt='IconLinkedIn' />
            </button>
            <button className='btnSocialCard' onClick={redirectGit} type='button'>
              <img id='WhatsApp' src={IconWhatsApp} alt='IconWhatsApp' />
            </button>
        </div>
      </div>
    </div>
  )
};

export default HeaderCard;