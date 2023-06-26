import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  StyledLink,
  NavContainer,
  NavList,
  NavItem,
} from './SharedLayout.styled.js';
import Loader from './loader/Loader.jsx';

const SharedLayout = () => {
  return (
    <Container>
      <NavContainer>
        <NavList>
          <NavItem>
            <StyledLink to="/">Home</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/movies">Movies</StyledLink>
          </NavItem>
        </NavList>
      </NavContainer>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
