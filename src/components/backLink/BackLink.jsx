import PropTypes from 'prop-types';
import { BackLinkBtn, BackLinkBlock } from './BackLink.styled';

const BackLink = ({ linkLocation }) => (
  <BackLinkBlock>
    <BackLinkBtn to={linkLocation}>Go back</BackLinkBtn>
  </BackLinkBlock>
);

BackLink.propTypes = {
  linkLocation: PropTypes.object,
};

export default BackLink;
