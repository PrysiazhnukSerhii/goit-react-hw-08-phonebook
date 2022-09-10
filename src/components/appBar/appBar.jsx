import { useSelector } from 'react-redux';

import { UserMenu } from '../userMenu/userMenu';

import { FaRegAddressBook } from 'react-icons/fa';

import { Nav, StyledLink, Container, Heder } from './appBar.styled';
import { button } from '../../components.styled/button.styled';

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
            <StyledLink className={button} to="/login">
              Login
            </StyledLink>
            <StyledLink className={button} to="/register">
              Register
            </StyledLink>
          </Container>
        )}
      </Nav>
    </>
  );
}
