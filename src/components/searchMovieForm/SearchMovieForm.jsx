import PropTypes from 'prop-types';

const SearchMovieForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <button type="submit">search</button>
      <input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter movie name"
      />
    </form>
  );
};

SearchMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMovieForm;
