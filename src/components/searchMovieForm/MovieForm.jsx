import PropTypes from 'prop-types';
import { Form, Input, Button } from './MovieForm.styled';

const MovieForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Input
      name="query"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Enter movie name"
    />
    <Button type="submit">search</Button>
  </Form>
);

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
