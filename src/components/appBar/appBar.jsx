import { LogOut } from '../logOut/logOut';
import { Nav, StyledLink, Container } from './appBar.styled';
import { useSelector } from 'react-redux';

// ------------------переписати показ силлок при вході і виході--------

export function AppBar() {
  let isLoggedIn = useSelector(state => state.userInformation.isLoggedIn);

  console.log(isLoggedIn);
  return (
    <>
      <Nav>
        {isLoggedIn ? (
          <>
            <LogOut />
            <StyledLink to="/contacts">Contacts</StyledLink>
          </>
        ) : (
          <Container>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </Container>
        )}
      </Nav>
    </>
  );
}

// створити AppBar:
//             -Navigation - навигація по сайту
//             - AuthNav - аутендифікація
//              -UserMenu - лог аут і сам юзер
// ці три це окремі три компоненти в які там уже всунути лінки
