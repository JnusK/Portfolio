import React from 'react';
import { NavFooter, IconLink, Copyright } from './main-styled';

const Footer = () => {
  const iconList = [
    {
      icon: 'fas fa-envelope-square fa-2x',
      tolink: ''
    },
    {
      icon: 'fab fa-linkedin fa-2x',
      tolink: 'https://www.linkedin.com/in/januskiong/',
    },
    {
      icon: 'fab fa-github-square fa-2x',
      tolink: 'https://github.com/JnusK',
    }
  ];

  return (
    <NavFooter>
      {iconList.map((icon, index) => {
        return (
          <IconLink href={icon.tolink} key={index}>
            <svg className={icon.icon} key={index} />
          </IconLink>
        )
      })}
      <Copyright>&copy; Copyright {(new Date()).getFullYear()}, Janus Kiong Yan Cong</Copyright>
    </NavFooter>
  );
};

export default Footer;
