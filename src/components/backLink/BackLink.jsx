import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BackLink = ({ linkLocation }) => <Link to={linkLocation}>Go back</Link>;

BackLink.propTypes = {
  linkLocation: PropTypes.object.isRequired,
};

export default BackLink;
