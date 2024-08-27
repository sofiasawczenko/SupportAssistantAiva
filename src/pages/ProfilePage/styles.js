import styled from 'styled-components';
import { Card, Statistic, Progress } from 'antd';

export const Container = styled.div`
  padding: 20px;
`;

export const StyledCard = styled(Card)`
  margin-bottom: 20px;
  width: 100%;
  font-size: 13.5px;
  font-family: "Fira Sans Condensed", sans-serif;
  background-color: #FAFAFA;
  border-color: #D9D9D9;
`;

export const Text = styled.p`
  font-size: 13.5px;
  font-family: "Fira Sans Condensed", sans-serif;
  line-height: 1.5;
`;

export const StyledStatistic = styled(Statistic)`
  .ant-statistic-title {
    font-size: 13.5px;
    font-family: "Fira Sans Condensed", sans-serif;
  }
  
  .ant-statistic-content-value {
    font-size: 24px;
  }
`;

export const StyledProgress = styled(Progress)`
  margin-bottom: 10px;
  
  .ant-progress-text {
    font-size: 13.5px;
    font-family: "Fira Sans Condensed", sans-serif;
  }
`;
