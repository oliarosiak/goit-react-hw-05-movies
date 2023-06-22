import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 25px;
  font-size: 16px;
  color: #010101;
`;

export const NavContainer = styled.nav`
  display: block;
  padding: 15px 30px;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  padding: 4px 8px;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
