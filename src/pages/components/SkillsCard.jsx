import React from 'react';

//icon
import IconGitHub from '../../assets/images/iconGitHubeblue.png';
import IconReact from '../../assets/images/iconReact.png';
import IconCSS from '../../assets/images/iconCSS3.png';
import IconHTML from '../../assets/images/iconHTML5.png';
import IconJS from '../../assets/images/iconJS.png';
import IconBootStrap from '../../assets/images/iconBootstrap.png';
import IconRedux from '../../assets/images/iconRedux.png';

function SkillsCard() {
  return (
    <div className='containerSkills'>
      <div className='containerHardSkills'>
        <p>
          <span>
            <img src={IconGitHub} alt="IconReact" />
            GitHub
          </span>
          <span>
            <img src={IconHTML} alt="IconReact" />
            HTML5
          </span>
          <span>
            <img src={IconCSS} alt="IconReact" />
            CSS
          </span>
          <span>
            <img src={IconJS} alt="IconReact" />
            JavaScript
          </span>
          <span>
            <img src={IconBootStrap} alt="IconReact" />
            BootStrap
          </span>
        </p>
      </div>
      <div className='containerHardSkills'>
        <p>
          <span>
            <img src={IconReact} alt="IconReact" />
            React
          </span>
          <span>
            <img src={IconReact} alt="IconReact" />
            React Router
          </span>
          <span>
            <img src={IconReact} alt="IconReact" />
            Reackt Hooks
          </span>
          <span>
            <img src={IconReact} alt="IconReact" />
            Context
          </span>
          <span>
            <img src={IconRedux} alt="IconReact" />
            Redux
          </span>
        </p>
      </div>
    </div>
  )
}

export default SkillsCard