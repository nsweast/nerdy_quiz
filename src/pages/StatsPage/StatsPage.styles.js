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
    text-align: center;
    margin: 0;
    padding: 20px;
  }
`;

export const PieChartContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 10px;
`;

export const PieChartLegend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PieChartSpan = styled.span`
  display: flex;
  align-items: center;

  &:before {
    content: '';
    width: 15px;
    height: 15px;
    margin-right: 5px;
    background-color: ${(props) => props.color};
  }
`;

export const PieChart = styled.div`
  height: 20vw;
  width: 20vw;
  min-height: 100px;
  min-width: 100px;
  border-radius: 50%;
  background: conic-gradient(
    ${ALL_COLORS.green} ${(props) => props.degree},
    ${ALL_COLORS.red} ${(props) => props.degree} 360deg
  );
`;
