import { Routes, Route } from 'react-router-dom';
import { Container, StyledLink, NavContainer, NavList, NavItem } from './App.styled.js';
import HomePage from 'pages/HomePage.jsx';
import MoviePage from 'pages/MoviePage.jsx';
import MovieDetails from 'pages/MovieDetails.jsx';
import NotFoundPage from 'pages/NotFoundPage.jsx';


const App = () => {
  return (
    <Container>
      <NavContainer>
        <NavList>
          <NavItem>
            <StyledLink to='/'><div>Home</div></StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to='/movies'><div>Movies</div></StyledLink>
          </NavItem>
        </NavList>
      </NavContainer>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviePage />} />
        <Route path='/movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' />
          <Route path='reviews' />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
};

export default App;
