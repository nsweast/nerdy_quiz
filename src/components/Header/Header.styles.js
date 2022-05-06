import styled from 'styled-components/macro';

export const HeaderStyled = styled.header`
  height: 60px;
  width: 100%;

  display: flex;
  gap: 2%;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
