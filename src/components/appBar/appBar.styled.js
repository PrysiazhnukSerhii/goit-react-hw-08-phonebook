import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  margin-bottom: 15px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;

  width: 420px;
`;

export const Heder = styled.h2`
  display: flex;
  align-items: center;
  font-size: 28px;

  color: white;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    background-color: #0d7bd1;
    border-style: none;
  }
`;
