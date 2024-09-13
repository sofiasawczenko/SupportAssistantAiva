import { CopyOutlined } from "@ant-design/icons";
import {
  Card as AntdCard,
  Button,
  Drawer,
  Dropdown,
  Input,
  Menu,
  Tooltip,
} from "antd";
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
  padding: 0rem 1rem;
  font-size: 1rem;
  color: #e3e3e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  overflow-y: scroll;
  height: 100vh;
  width: 100%;

  h1 {
    font-size: 1.5rem;
    color: #44d4c6;
  }

  p {
    font-size: 1rem;
  }
`;

export const GeneratePromptButton = styled(Button)`
  background-color: #1677ff;
  color: #fff;
`;

export const ButtonGroup = styled(Button)`
  width: 135px;
  display: fixed;

  &:hover {
    color: #44d4c6;
  }
`;

export const CustomLabel = styled.span`
  font-size: 14px;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #e3e3e3;
  gap: 0.3rem;

  .anticon {
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

  &:hover {
    color: #40a9ff;
  }
`;

export const Card = styled(AntdCard)`
  cursor: pointer;
  font-size: 16px;
  color: #1890ff;

  &:hover {
    color: #40a9ff;
  }
`;

export const TitleContainer = styled.div`
  font-family: "Fira Sans Condensed", sans-serif;
  font-size: 13px;
  line-height: 1.3;
  text-align: center;
  padding: 1rem;
  border-radius: 4px;
  background: #474747;
  border: 1px solid #1fb8a9;
  color: #e3e3e3;
`;

export const TextArea = styled(Input.TextArea)`
  background-color: #2b2b2b;
  color: #e3e3e3;
  border: 1.5px solid #3c3f41;
  border-radius: 4px;

  ::placeholder {
    color: #e3e3e3;
  }

  &:hover {
    background-color: #474747;
    color: #eaeaea;
    border-color: #2b2b2b;
  }
`;

export const StyledTextArea = styled(Input.TextArea)`
  background-color: #2b2b2b;
  color: #e3e3e3;
  border: 1.5px solid #3c3f41;
  border-radius: 4px;

  ::placeholder {
    color: #e3e3e3;
  }

  &:hover,
  &:focus {
    background-color: #474747;
    color: #eaeaea;
    border-color: #474747;
  }
`;

export const CustomMenu = styled(Menu)`
  background-color: #000;
  color: #fff;

  .ant-menu-item {
    color: #fff;
  }

  .ant-menu-item:hover,
  .ant-menu-item-active {
    background-color: #000;
  }
`;

export const CustomDropdown = styled(Dropdown)`
  .ant-dropdown-menu {
    background-color: #000;
    color: #fff;
  }

  .ant-dropdown-menu-item {
    color: #fff !important;
  }

  .ant-dropdown-menu-item:hover {
    background-color: #000 !important;
  }
`;

export const CustomButton = styled(Button)`
  background-color: #1a1a1a;
  color: #fff;
  border: none;

  &:hover {
    background-color: #333;
  }
`;

export const StyledCard = styled(Button)`
  background-color: #1a1a1a;
  color: #fff;
  border: none;

  &:hover {
    background-color: #333;
  }
`;

export const HoverButton = styled(Button)`
  background-color: #44d4c6;
  border-color: #44d4c6;
  color: black;

  &:hover {
    background-color: #44d4c6;
    border-color: #44d4c6;
    color: white;
  }
`;
