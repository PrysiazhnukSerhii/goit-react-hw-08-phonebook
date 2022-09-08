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
  display: block;
  padding: 0;

  width: 110px;
  height: 35px;

  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.87;
  border-radius: 4px;
  letter-spacing: 0.06em;
  color: #ffffff;

  border-style: solid;
  border-color: #2196f3;

  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #0d7bd1;
    color: #ffffff;
  }
  &.active {
    background-color: #0d7bd1;
    border-style: none;
  }
`;
