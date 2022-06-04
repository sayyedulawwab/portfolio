import React from 'react';
import linkedin_logo from '../assets/images/linkedin-brands.svg';
import github_logo from '../assets/images/logo-github.svg';
import propic from '../assets/images/propic.jpg';
function Intro() {
  return (
    <section id="intro" className="intro-section">
      <img className="profile-pic" src={propic} alt="profile" />
      <p>
        <strong>Hi 👋 I'm</strong>
      </p>
      <h1>Muhammad Sayyedul Awwab</h1>
      <p>
        <a
          href="https://github.com/sayyedulawwab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icons github-icon" src={github_logo} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/sayyedulawwab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icons" src={linkedin_logo} alt="LinkedIn" />
        </a>
      </p>

      <a className="call-to-action" href="#projects">
        View my projects
      </a>
    </section>
  );
}

export default Intro;
