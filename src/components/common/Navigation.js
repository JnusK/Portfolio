import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo, NavLinks, NavHeader } from './Main-styled';

const Navigation = () => {
  const sections = ['Projects', 'Contacts', 'Blog'];
  // const logoPath = './../../../resources/img/logo-compressed.png';
  const logoPath = 'logo-compressed.png';

  // TODO: Logo not showing up
  return (
    <NavHeader>
      <NavLink exact to='/'>
        <Logo src={logoPath} alt="JK" />
      </NavLink>
      <NavLinks>
        {sections.map((section, index) => {
          return (
            <li className="navchoice" key={index}><NavLink className="curnav" to={'/' + section} key={index}>{section}</NavLink></li>
          );
        })}
      </NavLinks>
    </NavHeader>
  );
}

export default Navigation;
