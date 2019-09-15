import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo, NavTabs, NavHeader } from './main-styled';

const Navigation = () => {
  const sections = ['Projects', 'Contacts', 'Blog'];
  // const logoPath = './../../../resources/img/logo-compressed.png';
  const logoPath = 'https://github.com/JnusK/Portfolio/blob/master/src/resources/img/logo-compressed.png?raw=true';

  // TODO: Logo not showing up
  return (
    <NavHeader>
      <NavLink exact to='/'>
        <Logo src={logoPath} alt="JK" />
      </NavLink>
      <NavTabs>
        {sections.map((section, index) => {
          return (
            <NavLink className="curnav" to={'/' + section} key={index}>
              <div className="navchoice" key={index}>{section}</div>
            </NavLink>
          );
        })}
      </NavTabs>
    </NavHeader>
  );
}

export default Navigation;
