import React, { useState } from 'react';

function Header() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <header>
      <nav>
        <div>
          <a href="/">
            <strong>Muhammad Sayyedul Awwab</strong>
          </a>
          <div className={`menu-btn ${menu && 'open'}`} onClick={handleClick}>
            <div className="menu-btn__burger"></div>
          </div>
        </div>
        <ul className={`menu-list ${menu && 'responsive'}`}>
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
