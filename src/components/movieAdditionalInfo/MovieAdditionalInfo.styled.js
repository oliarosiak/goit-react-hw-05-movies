import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdditionalContainer = styled.div`
  padding: 8px 20px;
  border-bottom: 2px solid var(--border-color);
`;

export const AdditionalTitle = styled.h3`
  margin-bottom: 12px;
  text-decoration: underline;
`;

export const AdditionalList = styled.ul`
  padding: 0 20px;
`;

export const AdditionalItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const AdditionalLink = styled(NavLink)`
  color: var(--second-text-color);
  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;
