import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';

export const StatPageContainer = styled.div`
  width: 70%;
  margin: 0 auto;

  background-color: ${ALL_COLORS.white};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-radius: 10px;
  box-shadow: 20px 20px 40px ${ALL_COLORS.purpleGrey},
    -20px -20px 40px ${ALL_COLORS.purpleGrey};

  h4,
  span {
    margin: 0;
    padding: 20px;
  }
`;

export const PieChart = styled.div`
  height: 20vh;
  width: 20vh;
  border-radius: 50%;
  background: conic-gradient(
    ${ALL_COLORS.green} ${(props) => props.degree},
    ${ALL_COLORS.red} ${(props) => props.degree} 360deg
  );
`;
