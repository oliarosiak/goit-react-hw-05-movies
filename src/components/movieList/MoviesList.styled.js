import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListContainer = styled.ul`
  margin-top: 16px;
  padding: 8px 16px;

`;

export const StyledLink = styled(NavLink)` 
  color: inherit;
  font-size: 20px;

  &.active {
    color: var(--active-color);
    text-decoration: underline;
  }

  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;
