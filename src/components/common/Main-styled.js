import styled from 'styled-components';

export const MainApp = styled.div`
  font-family: Livvic;
`;

export const NavFooter = styled.div`
  position: relative;
  width: 100%;
`;

export const Copyright = styled.small`
  position: absolute;
  right: 50px;
  bottom: 0px;
`;

export const IconLink = styled.a`
  margin: 10px;
`;

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-space-between;
  background-color: black;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
`;

export const Logo = styled.img`
  width: 20px;
  height: 30px;
`;

export const NavLinks = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;

  li {
    display: inline-block;
    margin-right: 8px;
    color: grey;


    a {
      text-decoration: none;
      color: white;
    }

    .navchoice:hover {
      border: 1px solid white;
      background-colour: #0ff;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }

    .curnav.active {
      font-weight: bold;
      background-color: #c1c4c9;
    }
  }
`;

export const ScrollTopButton = styled.div`
  position: fixed;
  right: 50px;
  top: 90%;
  opacity: 0.2;

  :hover {
    background-color: #f2f2ff;
    opacity: 1;
  }
`;
