import styled from 'styled-components';
import { Switch, Upload } from 'antd';

export const ModalContainer = styled.div`
  width: ${(props) => (props.isOpen ? '35rem' : '0')};
  height: 100vh;
  background-color: #0F1216;
  position: fixed;
  bottom: 0;
  right: 0;
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: ${(props) => (props.isDragging ? 'none' : 'transform 0.3s ease')};
  z-index: 1000;
  overflow: hidden;
`;

export const ModalContent = styled.div`
  padding: 1.5rem;
`;

export const Dragger = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 10px;
  height: 100%;
  background: #000;
  cursor: ew-resize;
  z-index: 1001;
`;

export const UserGreetingHeader = styled.div`
  color: #44D4C6;
  font-size: 2rem;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 400;
  margin-left: 1.2rem;
`;

export const UserGreetingSubHeader = styled.div`
  color: #444746;
  font-size: 1.5rem;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: 400;
  margin-left: 1.2rem;
  margin-top: -1.8rem;
`;

export const ToolsContainer = styled.div`
  display: flex;
  padding: 1rem;
  text-align: left;
  transition: transform 0.2s;
  color: #333333;
  border-radius: 0.5rem;
`;

export const ToolItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 5rem;
  border-radius: 0.5rem 0rem 0.5rem 0rem;
  padding: 0.2rem;
  margin: 1rem;
  background: linear-gradient(45deg, #2A2D34, #171A1E);
  color: #333333;

  &:hover {
    border-color: green;
    background: rgba(42, 45, 52, 0.9);
  }
`;

export const QuestionSection = styled.div`
  display: row;
  padding: 1rem;
  text-align: left;
  transition: transform 0.2s;
`;

export const QuestionItem = styled.div`
  border: 0.1rem solid #2A2D34;
  border-radius: 0.5rem 0rem 0.5rem 0rem;
  padding: 0.2rem;
  margin: 1rem;

  &:hover {
    background-color: #171A1E;
  }
`;

export const QuestionImage = styled.img`
  width: 0.9rem;
  height: 0.9rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const QuestionTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 0.8rem;
  color: #E1E1E1;
  margin-left: 0.4rem;
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: #BFBFBF;
  }
`;

export const InputModalContainer = styled.div`
`;

export const StyledUploadContainer = styled.div`
  width: 1px;
`;

export const InputModalOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 7rem;
`;

export const ImageAttachDocument = styled.img`
  width: 10px;
  height: 16px;
  margin-left: 0.9rem;
`;

export const StyledUpload = styled(Upload)`
  .ant-upload {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(120%, 220%);
    padding: 1rem;
  }

  .ant-upload-btn {
    font-size: 1rem; /* Ajuste o tamanho do ícone aqui */
  }
`;

export const ImageSnippingTool = styled.img`
  width: 17px;
  height: 18px;
  margin-left: 21rem;
`;

export const ImageSendText = styled.img`
  width: 1rem;
  height: 1.1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  position: absolute;
  bottom: 0.5rem;
  left: 88%;
`;

export const TextInputSwitch = styled.input`
  position: fixed;
  bottom: 0.6%;
  left: 67%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  color: white;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 0.8rem;
  outline: none;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
`;

export const ImageLibraryToggle = styled.img`
  width: 1.4rem;
  height: 1.5rem;
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const StyledSwitch = styled(Switch)`
  &.ant-switch {
    background-color: #454C58;
    border-radius: 12px;
    width: 1px;
    height: 15px;
    bottom: 1.8rem;
    right: 80%;
    transform: translateX(-50%);
    position: fixed;
  }

  &.ant-switch-checked {
    background-color: #44D4C6;
  }

  .ant-switch-handle {
    border-radius: 50%;
    background-color: black;
    width: 14px;
    height: 13px;
    transform: translateX(0.1rem);
  }
`;

export const InputModalContent = styled.div`
  background-color: #181C23;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  position: fixed;
  bottom: 3rem;
  width: 21.5rem;
  height: 6rem;
  margin-left: 1.5rem;
  border: 0.1rem solid #2A2D34;
`;

export const TextInput = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 0.8rem;
  outline: none;
  width: 100%;
  padding: 0.5rem;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 0.5rem;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  color: #A6F750;
`;