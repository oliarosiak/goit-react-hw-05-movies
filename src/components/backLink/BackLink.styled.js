import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackLinkBlock = styled.div`
  padding: 8px 20px;
`;

export const BackLinkBtn = styled(NavLink)`
  display: inline-block;
  width: 120px;
  padding: 8px 16px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: var(--main-text-color);
  background-color: var(--active-color);
  border: 2px solid var(--border-color);
`;
