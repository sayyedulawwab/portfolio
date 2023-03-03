import React from 'react';
import envelope_logo from '../assets/images/envelope-regular.svg';
import linkedin_logo from '../assets/images/linkedin-brands.svg';
function Footer() {
  return (
    <footer id="contact">
      <section>
        <div>
          <p>Find me on</p>

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
        </div>
        <div>
          <p>Mail me at</p>
          <a
            href="mailto:sayyedulawwab@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icons social-icons"
              src={envelope_logo}
              alt="Email"
            />
          </a>
        </div>
      </section>

      <p className="copyright">
        &copy; 2022 All rights reserved | Made by{' '}
        <a href="/">
          <strong>Muhammad Sayyedul Awwab</strong>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
