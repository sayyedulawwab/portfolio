import React from 'react';
import linkedin_logo from '../assets/images/linkedin-brands.svg';
import github_logo from '../assets/images/logo-github.svg';
import propic from '../assets/images/propic.jpg';
function Intro() {
  return (
    <section id="intro" className="intro-section">
      <img className="profile-pic" src={propic} alt="profile" />
      <div>
        <p>
          <strong>Hi 👋 I'm</strong>
        </p>
        <h1>Muhammad Sayyedul Awwab</h1>
        <p>Software Engineer</p>
        <p>
          <a
            href="https://github.com/sayyedulawwab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icons social-icons"
              src={github_logo}
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sayyedulawwab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icons social-icons"
              src={linkedin_logo}
              alt="LinkedIn"
            />
          </a>
        </p>
      </div>
    </section>
  );
}

export default Intro;
