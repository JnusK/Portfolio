import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo, NavTabs, NavHeader } from './main-styled';
import logo from './../../resources/img/logo-compressed.png';

const Navigation = () => {
  const sections = ['tech', 'travel', 'contact'];

  return (
    <NavHeader>
      <NavLink exact to='/'>
        <Logo src={logo} alt="JK" />
      </NavLink>
      <NavTabs>
        {sections.map((section, index) => {
          return (
            <NavLink to={'/' + section} key={index}>
              {section}
            </NavLink>
          );
        })}
      </NavTabs>
    </NavHeader>
  );
};

export default Navigation;
