import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 45px 20px;
  font-size: 20px;
  color: var(--second-text-color);
`;

export const NavContainer = styled.nav`
  display: flex;
  padding: 15px 30px;
  margin-bottom: 16px;
  color: var(--main-text-color);
  border-bottom: 2px solid var(--border-color);
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  padding: 4px 8px;
  &:not(:last-child) {
    margin-right: 35px;
  }
`;

export const StyledLink = styled(NavLink)` 
  color: inherit;
  font-size: 30px;

  &.active {
    color: var(--active-color);
    text-decoration: underline;
  }
`;
