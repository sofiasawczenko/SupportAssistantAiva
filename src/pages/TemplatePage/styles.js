import { CopyOutlined } from "@ant-design/icons";
import { Card as AntdCard, Button, Drawer, Tooltip } from "antd";
import styled from "styled-components";

export const CustomDrawer = styled(Drawer)`
  .ant-drawer-header {
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    font-family: "Fira Sans Condensed", sans-serif;
  }

  .ant-drawer-body {
    background-color: #fafafa;
    color: #333;
    padding: 16px;
  }
`;

export const PromptContainer = styled.div`
  padding: 2rem;
  font-size: 1rem;
  color: #333;
  margin-top: -3rem;

  h1 {
    font-size: 1.5rem;
    color: #44d4c6;
  }

  p {
    font-size: 1rem;
  }
`;

export const GeneratePromptButton = styled(Button)`
  background-color: #44d4c6;
  color: #101216;

  &:hover {
    background-color: #101216 !important;
    color: #44d4c6 !important;
  }
`;

export const FormWrapper = styled.div`
  padding: 16px;

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 12px;
    }
  }
`;

export const ButtonGroup = styled(Button)`
  width: 135px;
  margin-top: 1rem;
  display: fixed;
`;

export const ButtonGroupContainer = styled(Button)`
  justify-content: flex;
  border: none;
`;

export const CustomLabel = styled.span`
  font-size: 14px;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #44d4c6;

  .anticon {
    margin-left: 8px;
    font-size: 13px;
    color: gray;
  }
`;

export const CustomTooltip = styled(Tooltip)`
  .ant-tooltip-inner {
    font-size: 14px;
  }
`;

export const ResultTitle = styled.div`
  font-family: "Fira Sans Condensed", sans-serif;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CopyButton = styled(CopyOutlined)`
  cursor: pointer;
  font-size: 16px;
  color: #1890ff;
  margin-left: 10px;

  &:hover {
    color: #40a9ff;
  }
`;

export const Card = styled(AntdCard)`
  cursor: pointer;
  font-size: 16px;
  color: #1890ff;
  margin-left: 10px;

  &:hover {
    color: #40a9ff;
  }
`;

export const TitleContainer = styled.div`
  font-family: "Fira Sans Condensed", sans-serif;
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 1.8rem;
  padding: 10px;
  border-radius: 4px;
  background: #101216;
  margin-bottom: 20px;
  border: 1px solid #44d4c6;
  color: #44d4c6;
`;
