import { InfinitySpin } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => (
  <LoaderContainer>
    <InfinitySpin width="450" color="var(--active-color)" />
  </LoaderContainer>
);

export default Loader;
