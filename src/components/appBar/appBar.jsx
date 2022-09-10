import { useSelector } from 'react-redux';

import { UserMenu } from '../userMenu/userMenu';

import { FaRegAddressBook } from 'react-icons/fa';

import { Nav, StyledLink, Container, Heder } from './appBar.styled';

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
