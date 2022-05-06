import styled from 'styled-components/macro';

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2%;

  margin-top: 20px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;
