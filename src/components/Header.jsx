import React from 'react';

function Header() {

    
  return (
    <header>
      <nav>
        <div>
          <a href="/">
            <strong>Muhammad Sayyedul Awwab</strong>
          </a>
          <div className="menu-btn">
            <div className="menu-btn__burger"></div>
          </div>
        </div>
        <ul className="menu-list">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
