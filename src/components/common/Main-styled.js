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
  right: 10px;
  bottom: 0px;
`;

export const IconLink = styled.a`
  margin: 10px;
`;

export const NavHeader = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-space-between;
  background-color: black;
  align-items: stretch;
  height: 7vh;
  z-index: 5;
`;

export const Logo = styled.img`
  width: 30px;
  height: 45px;
  text-decoration: none;
  vertical-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10px;
`;

export const NavTabs = styled.div`
  list-style: none;
  display: grid;
  grid-column-gap: 10px;
  align-items: stretch;
  height: auto;
  margin: auto;
  margin-left: 50px;

  a {
    text-decoration: none;
    color: white;
    padding: 2px;
    grid-row: 1;
    text-transform: capitalize;

    :hover {
      font-weight: bold;
      color: #0ff;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
  }
  a.active {
    font-weight: bold;
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
