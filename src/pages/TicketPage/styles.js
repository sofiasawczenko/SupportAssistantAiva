import styled from 'styled-components';
import { RobotOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip, Button } from 'antd';

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
  padding: 24px;
  margin: 0 auto;
  background-color: #fff;
  padding: 2rem;
  font-size: 1rem;
  color: #333;
  margin-top: -2rem;
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
  font-size: 14px;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: bold;


    svg {
    size: 12px;
    margin-left: 7px;
    color: gray; 
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
  background: #eff4fd;
  margin-bottom: 20px; 
  border: 1px solid #ddd;
`;

export const CustomTooltip = styled(Tooltip)`
  .ant-tooltip-inner {
    font-size: 10px; 
  }
`;

export const SaveButton = styled(Button)`
  background-color: #1677ff;
  border-color: #1677ff;
  color: white;

  &:hover {
    background-color: #1d8cf8;
    border-color: #1d8cf8;
  }
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