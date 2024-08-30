import styled from 'styled-components';
import { Card, Statistic, Progress, Collapse } from 'antd';

export const Container = styled.div`
  padding: 24px;
  min-height: 100vh;
`;

export const StyledCard = styled(Card)`
  margin-bottom: 20px;
  width: 100%;
  font-size: 13.5px;
  font-family: 'Fira Sans Condensed', sans-serif;
  background-color: #1b1b1b;
  border-color: #3c3f41;
`;

export const StyledCardHeader = styled.div`
  background-color: #1b1b1b;
  color: #b6b6b6;
  font-family: 'Fira Sans Condensed', sans-serif;
  font-size: 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 13.5px;
  font-family: 'Fira Sans Condensed', sans-serif;
  line-height: 1.5;
  color: #b6b6b6;
`;

export const StyledStatistic = styled(Statistic)`
  .ant-statistic-title {
    font-size: 13.5px;
    font-family: 'Fira Sans Condensed', sans-serif;
  }

  .ant-statistic-content-value {
    font-size: 24px;
  }
`;

export const StyledProgress = styled(Progress)`
  margin-bottom: 10px;

  .ant-progress-text {
    font-size: 13.5px;
    font-family: 'Fira Sans Condensed', sans-serif;
  }
`;

export const StyledCollapse = styled(Collapse)`
  .ant-collapse {
    background-color: #e3e3e3;
    border: 1px solid #e3e3e3;
  }

  .ant-collapse-item {
    background-color: #e3e3e3;
    border-bottom: 1px solid #3c3f41;
  }

  .ant-collapse-header {
    background-color: #D8D8D8;
    color: black;
    font-family: 'Fira Sans Condensed', sans-serif;
    font-size: 14px;
  }

  .ant-collapse-content {
    background-color: #E9E9E9;
    color: white;
  }
`;
