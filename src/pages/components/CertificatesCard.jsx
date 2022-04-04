import React from 'react';

function CertificatesCard() {
  //certificados trybe
  const target = "_blank"
  const fundaments = 'https://www.credential.net/3e05d6d6-fd48-4b79-afa4-c53cd788596f#gs.vqkmj1';
  const frontEnd = 'https://www.credential.net/8be8f99f-5b90-4167-a46b-2fe341d1028a#gs.vqkhxp';

  //certificados dio
  const logica = 'https://www.dio.me/certificate/26250C34/share';
  const introducaoHtmlCss = 'https://www.dio.me/certificate/7ABDEEFA/share';
  const internetJs = 'https://www.dio.me/certificate/B26B2B90/share';
  const arquitetura = 'https://www.dio.me/certificate/C185DE69/share';
  const gitHub = 'https://www.dio.me/certificate/A43C7964/share';
  const linux = 'https://www.dio.me/certificate/F8EDD024/share';
  const passos = 'https://www.dio.me/certificate/5E0EF8DB/share';
  const bootstrap = 'https://www.dio.me/certificate/F13E020C/share';
  const shell = 'https://www.dio.me/certificate/B1DBA4AD/share';
  const html ='https://www.dio.me/certificate/90DACE51/share';
  const js6 = 'https://www.dio.me/certificate/D1DC77EC/share';
  const jsIntroduction = 'https://www.dio.me/certificate/055FAE09/share';
  const jsSintaxy = 'https://www.dio.me/certificate/55475576/share';
  const jsOperator = 'https://www.dio.me/certificate/D08A2CF9/share';
  const jsVariables = 'https://www.dio.me/certificate/8143749D/share';
  const jsFunctions = 'https://www.dio.me/certificate/F23D647A/share';
  const colections = 'https://www.dio.me/certificate/DCDD0491/share';
  const debugging = 'https://www.dio.me/certificate/FE5FC59C/share';
  const jsAsync = 'https://www.dio.me/certificate/E42359D6/share';
  const responsividade = 'https://www.dio.me/certificate/AB46EF78/share';

  return (
    <div className='containerCertificates'>
      <div className='trybe'>
        <h3>Trybe</h3>
        <div className='containerImg'>
          <a href={fundaments} target={target}>
            <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/38013745" alt="fundamentos" />
          </a>
          <a href={frontEnd} target={target}>
            <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/48844668" alt="fundamentos" />
          </a>
        </div>
      </div>
      <div className='dio'>
        <h3>Digital Innovation One</h3>
        <div className="containers">
        <div className="containerOne">
          <ul>
            <li>
              <a href={logica} target={target}>
                Lógica de programação essencial
              </a>
            </li>

            <li>
              <a href={internetJs} target={target}>
                Programação para internet com JavaScript
              </a>
            </li>

            <li>
              <a href={gitHub} target={target}>
                Introdução ao Git e ao GitHub
              </a>
            </li>

            <li>
              <a href={passos} target={target}>
                Primeiros passos para começar a programar
              </a>
            </li>

            <li>
              <a href={shell} target={target}>
                Shell script - Manipulando Arquivos
              </a>
            </li>

            <li>
              <a href={js6} target={target}>
                JavaScript ES6 essencial
              </a>
            </li>

            <li>
              <a href={jsSintaxy} target={target}>
                Sintaxe Básica em JavaScript
              </a>
            </li>

            <li>
              <a href={jsVariables} target={target}>
                Variáveis e Tipos
              </a>
            </li>

            <li>
              <a href={colections} target={target}>
                Coleções
              </a>
            </li>

            <li>
              <a href={jsAsync} target={target}>
                Javascript Assíncrono
              </a>
            </li>

          </ul>

        </div>
        <div className="containerOne">
          <ul>
            <li>
              <a href={introducaoHtmlCss} target={target}>
                Introdução a criação de websites com HTML5 e CSS3
              </a>
            </li>

            <li>
              <a href={arquitetura} target={target}>
                Fundamentos de Arquitetura de Sistemas
              </a>
            </li>

            <li>
              <a href={linux} target={target}>
                Linux: A introdução ao sistema operacional
              </a>
            </li>

            <li>
              <a href={bootstrap} target={target}>
                Construindo páginas para internet com Bootstrap
              </a>
            </li>

            <li>
              <a href={html} target={target}>
                HTML Web Developer
              </a>
            </li>

            <li>
              <a href={jsIntroduction} target={target}>
                Introdução ao JavaScript
              </a>
            </li>

            <li>
              <a href={jsOperator} target={target}>
                Sintaxe e Operadores
              </a>
            </li>

            <li>
              <a href={jsFunctions} target={target}>
                Funções
              </a>
            </li>

            <li>
              <a href={debugging} target={target}>
                Debugging e Error Handling
              </a>
            </li>

            <li>
              <a href={responsividade} target={target}>
                Conceitos de responsividade e experiência do usuário
              </a>
            </li>

          </ul>

        </div>
        </div>
      </div>
    </div>
  )
};

export default CertificatesCard;