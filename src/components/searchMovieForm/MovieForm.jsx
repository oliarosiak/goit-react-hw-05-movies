import PropTypes from 'prop-types';

const MovieForm = ({ onSubmit }) => (
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

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
