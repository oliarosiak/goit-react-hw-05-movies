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
      <header>
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
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>      
    </Container>
  );
};

export default SharedLayout;
