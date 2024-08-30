import { Card, Collapse, Progress, Statistic } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const StyledCard = styled(Card)`
  margin-bottom: 20px;
  width: 100%;
  font-size: 13.5px;
  font-family: "Fira Sans Condensed", sans-serif;
  background-color: #101216;
  border-color: #d9d9d9;

  color: #44d4c6;

  .ant-card-head-title {
    color: #44d4c6;
  }
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
    color: #44d4c6 !important;
  }
`;

export const StyledPanel = styled(Collapse.Panel)`
  .ant-collapse-header {
    background-color: #101216;
    color: #44d4c6 !important;
  }

  .ant-collapse-content-box {
    background-color: #101216;
    color: #44d4c6;
  }
`;
