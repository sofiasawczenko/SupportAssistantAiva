import styled from 'styled-components';
import { RobotOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Form, DatePicker, Menu, Input, Tooltip, Button } from 'antd';

export const StyledIcon = styled(RobotOutlined)`
  font-size: ${(props) => props.size || '24px'};
  color: ${(props) => props.color || 'black'};
  margin: ${(props) => props.margin || '0'};
  vertical-align: ${(props) => props.align || 'middle'};
  cursor: pointer;
`;

export const FormItemContainer = styled.div`
  margin-bottom: 2px;
`;

export const FormContainer = styled.div`
  padding: 2rem;
  margin: 0 auto;
  font-size: 1rem;
  color: #333;
  overflow-x: hidden;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 8px;
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
  line-height: 1.3;
  text-align: center;
  margin-bottom: 1.8rem;
  padding: 10px;
  border-radius: 4px;
  background: #474747;
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
  backgroundColor: '#cdcdcd',
  color: '#fff',
};

export const itemMenuStyle = {
  color: 'black',
};

export const dropdownTitleStyle = {
  backgroundColor: '#131313',
  color: '#fff',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
};

export const dropdownTitleHoverStyle = {
  backgroundColor: '#333',
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
  margin-bottom: 1rem;

  .ant-form-item-label > label {
    color: #e3e3e3;
  }

  .ant-form-item-control-input-content {
    color: #e3e3e3;
  }
`;
