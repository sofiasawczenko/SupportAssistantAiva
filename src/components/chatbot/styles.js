import styled from 'styled-components';
import { Input, Button as AntButton, Tabs as AntTabs } from 'antd';

export const ChatbotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ChatWindow = styled.div`
  flex-grow: 1;
  padding: 16px;
  background-color: #2b2b2b;
  overflow-y: auto;
  height: 40rem;
  color: white;

  .bot {
    text-align: left;
    margin-bottom: 8px;
    background-color: #2b2b2b;
    border-radius: 8px;
    padding: 8px;
  }

  .user {
    text-align: right;
    margin-bottom: 8px;
    background-color: #474747;
    border: 1px solid #1b1b1b;
    border-radius: 5px;
    padding: 8px;
  }
`;

export const ChatInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #2b2b2b;
  border-top: 0.1px solid gray;
  bottom: 0;
  position: fixed;
  width: 32rem;
  box-sizing: border-box;
  z-index: 100;

  @media (max-width: 768px) {
    max-width: 25rem;
  }
`;

export const ChatInputFieldPlusOptions = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    textarea {
      width: 100%;
      margin-right: 0;
      margin-bottom: 8px;
    }
  }

  @media (min-width: 769px) {
    textarea {
      flex: 1;
      width: calc(100% - 50px);
      margin-right: 8px;
    }
  }
`;

export const ChatInputButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

export const ButtonStyled = styled(AntButton)`
  background-color: #1fb8a9;
  border-color: #1fb8a9;
  color: black;
  margin-top: 8px;

  &:hover {
    background-color: #36b7b1;
    border-color: #44d4c6;
  }
`;

export const UploadButton = styled(AntButton)`
  border-color: #1fb8a9;
  color: #1fb8a9;

  &:hover {
    border-color: #44d4c6;
    color: #44d4c6;
  }
`;

export const ReactionButtons = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const ReactionIcon = styled.div`
  font-size: 18px;
  color: #0066cc;
  margin: 0 8px;

  &:hover {
    color: #36b7b1;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const CustomTextArea = styled(Input.TextArea)`
  border-color: gray;

  &:hover {
    border-color: #d0f8f4;
    box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.2);
  }

  &:focus {
    border-color: #1fb8a9;
    box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.2);
  }
`;

export const HoverButtonUpload = styled(AntButton)`
  background-color: white;
  border-color: black;
  color: black;

  &:hover {
    background-color: #44d4c6;
    color: #44d4c6 !important;
  }
`;

export const HoverButtonSend = styled(AntButton)`
  background-color: #44d4c6;
  border-color: #44d4c6;
  color: black;
  margin-top: 1rem;

  &:hover {
    background-color: #44d4c6 !important;
    color: white !important;
    border-color: #44d4c6 !important;
  }
`;

export const StyledTabs = styled(AntTabs)`
  color: #0d9e90;

  .ant-tabs-tab-active {
    color: #0d9e90 !important;
    border-color: #00bfae !important;
  }

  .ant-tabs-ink-bar {
    background-color: #00bfae !important;
  }
`;

export const StyledButton = styled(AntButton)`
  &.ant-btn-primary {
    background-color: #00bfae !important;
    border-color: #00bfae !important;
  }
`;
