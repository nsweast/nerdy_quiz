import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';

const LoadingStyled = styled.span`
  margin: 0 auto;
  font-size: larger;
  font-weight: bold;
  color: ${ALL_COLORS.white};
`;

const Loading = () => {
  return <LoadingStyled>Loading...</LoadingStyled>;
};

export default Loading;
