import React from 'react';
import { StyledHeader } from './Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <div className="logoWrapper">
          <img src={require('../../images/logo.png')} alt="logo" />
        </div>
        <h1>GROŽITA</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/#">Pagrindinis</a>
          </li>
          <li>
            <a href="/#">Paslaugos</a>
          </li>
          <li>
            <a href="/#">Galerija</a>
          </li>
          <li>
            <a href="/#">Kontaktai</a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
