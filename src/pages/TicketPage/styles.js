import { QuestionCircleOutlined, RobotOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Menu, Tooltip } from "antd";
import styled from "styled-components";

export const StyledIcon = styled(RobotOutlined)`
  font-size: ${(props) => props.size || "24px"};
  color: ${(props) => props.color || "black"};
  margin: ${(props) => props.margin || "0"};
  vertical-align: ${(props) => props.align || "middle"};
  cursor: pointer;
`;

export const FormContainer = styled.div`
  font-size: 1rem;
  padding: 1rem;
  color: #333;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 0.75rem;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #1890ff;

  &:hover {
    color: #40a9ff;
  }
`;

export const StyledText = styled.span`
  font-size: 13.5px;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: bold;
  color: #e3e3e3;

  svg {
    size: 12px;
    margin-left: 7px;
    color: gray;
  }
`;

export const TitleContainer = styled.div`
  font-family: "Fira Sans Condensed", sans-serif;
  font-size: 13px;
  text-align: center;
  border-radius: 4px;
  background: #474747;
  padding: 1rem;
  border: 1px solid #1fb8a9;
  color: #e3e3e3;
`;

export const CustomTooltip = styled(Tooltip)`
  .ant-tooltip-inner {
    font-size: 10px;
  }
`;

export const SaveButton = styled(Button)`
  background-color: #1fb8a9;
  border-color: #1fb8a9;
  color: black;
`;

export const UploadWrapper = styled.div`
  .ant-upload-drag-icon {
    color: #1677ff;
  }
`;

export const StyledQuestionIcon = styled(QuestionCircleOutlined)`
  color: #a0a0a0;
  font-size: 14px;
  margin-left: 0.5rem;
`;

export const StyledTextArea = styled(Input.TextArea)`
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

  &:focus {
    border-color: #474747;
    background-color: #474747;
    color: #eaeaea;
  }
`;

export const CustomMenu = styled(Menu)`
  background-color: #000;
  color: #000;

  .ant-menu-item {
    color: #000;
  }

  .ant-menu-item:hover {
    background-color: #000;
  }

  .ant-menu-item-active {
    background-color: #000;
  }
`;

export const Checkbox = styled(Menu)`
  color: white;
`;

export const HoverButton = styled(Button)`
  background-color: #44d4c6;
  border-color: #44d4c6;
  color: black;

  &:hover,
  &:focus {
    background-color: #44d4c6 !important;
    border-color: #44d4c6 !important;
    color: white !important;
  }

  &:active {
    background-color: #44d4c6 !important;
    border-color: #44d4c6 !important;
    color: white !important;
  }
`;

export const dropdownMenuStyle = {
  backgroundColor: "#cdcdcd",
  color: "#fff",
};

export const itemMenuStyle = {
  color: "black",
};

export const dropdownTitleStyle = {
  backgroundColor: "#131313",
  color: "#fff",
  border: "none",
  display: "flex",
  alignItems: "center",
};

export const dropdownTitleHoverStyle = {
  backgroundColor: "#333",
};

export const StyledDatePicker = styled(DatePicker)`
  background-color: #2b2b2b;
  color: #e3e3e3;
  border: 1.5px solid #3c3f41;
  border-radius: 4px;

  .ant-picker-input > input {
    color: #e3e3e3;
  }

  .ant-picker-suffix {
    color: #e3e3e3;
  }

  &:hover {
    background-color: #474747;
  }

  &:focus {
    border-color: #474747;
    background-color: #474747;
  }
`;

export const BlackFormItem = styled(Form.Item)`
  background-color: #2b2b2b;
  padding: 1rem;
  border-radius: 4px;

  .ant-form-item-label > label {
    color: #e3e3e3;
  }

  .ant-form-item-control-input-content {
    color: #e3e3e3;
  }
`;
