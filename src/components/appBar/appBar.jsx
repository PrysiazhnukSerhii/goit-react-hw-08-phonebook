import { Nav, StyledLink, Container, Heder } from './appBar.styled';
import { useSelector } from 'react-redux';
import { UserMenu } from '../userMenu/userMenu';
import { FaRegAddressBook } from 'react-icons/fa';

// ------------------переписати показ силлок при вході і виході--------

export function AppBar() {
  let token = useSelector(state => state.userInformation.token);

  return (
    <>
      <Nav>
        {token ? (
          <>
            <UserMenu />
          </>
        ) : (
          <Container>
            <Heder>
              Phone Book <FaRegAddressBook />
            </Heder>
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
