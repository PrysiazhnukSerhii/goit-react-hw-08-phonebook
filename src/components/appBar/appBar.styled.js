import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  margin-bottom: 15px;
`;

export const NavBox = styled.div`
  margin-right: auto;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  margin-left: 15px;
  &.active {
    color: rgb(237, 28, 84);
  }
`;
