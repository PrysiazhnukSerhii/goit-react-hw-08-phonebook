import { LogOut } from '../logOut/logOut';
// import { NavLink } from 'react-router-dom';
import { Nav, NavBox, StyledLink } from './appBar.styled';

export function AppBar() {
  return (
    <>
      <Nav>
        <NavBox>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </NavBox>
        <LogOut />
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </Nav>
    </>
  );
}

// створити AppBar:
//             -Navigation - навигація по сайту
//             - AuthNav - аутендифікація
//              -UserMenu - лог аут і сам юзер
// ці три це окремі три компоненти в які там уже всунути лінки
