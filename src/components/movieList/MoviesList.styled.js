import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListContainer = styled.ul`
  margin-top: 16px;
  padding: 8px 16px;
`;

export const StyledLink = styled(NavLink)`
  color: inherit;
  font-size: 20px;

  &:hover,
  &:focus {  
    color: var(--accent-color);
    text-decoration: underline;
  }

  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;
