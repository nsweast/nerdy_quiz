import styled from 'styled-components/macro';

const NoMatchStyles = styled.div`
  text-align: center;
  font-size: x-large;
`;

const NoMatch = () => {
  return <NoMatchStyles>This page doesn't exist</NoMatchStyles>;
};

export default NoMatch;
