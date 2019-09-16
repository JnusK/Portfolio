import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo, NavTabs, NavHeader } from './main-styled';
import logo from './../../../resources/img/logo-compressed.png';

const Navigation = () => {
  const sections = ['Projects', 'Contacts', 'Blog'];

  return (
    <NavHeader>
      <NavLink exact to='/'>
        <Logo src={logo} alt="JK" />
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
