import { Button as AntButton, Input, Tooltip } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  font-size: 1rem;
  color: #333;
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow-y: scroll;
  padding: 0 1rem;
`;

export const UploadButton = styled.div`
  margin: 20px 0;

  input[type="file"] {
    display: none;
  }

  button {
    padding: 10px 20px;
    background-color: #d0f8f4;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #d0f8f4;
      color: #000;
    }
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #474747;
  border-radius: 4px;

  &:focus {
    border-color: #000;
    background-color: #000;
    color: #474747;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d0f8f4;
    color: #d0f8f4;
  }
`;

export const CustomButton = styled(AntButton)`
  background-color: #1fb8a9;
  border-color: #1fb8a9;
  color: #fff;

  &:hover,
  &:focus {
    color: #d0f8f4;
    box-shadow: none;
  }
`;

export const Checkbox = styled.div`
  margin-top: 20px;
`;

export const Label = styled.label`
  margin-left: 8px;
  font-size: 16px;
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

export const StyledText = styled.span`
  font-family: "Fira Sans Condensed", sans-serif;
  color: #e3e3e3;
`;

export const StyledSubText = styled(StyledText)`
  font-size: 14px;
`;

export const StyledInput = styled(Input)`
  background-color: #2b2b2b;
  color: #e3e3e3;
  border: 1.5px solid #3c3f41;
  border-radius: 4px;

  ::placeholder {
    color: #b0b0b0;
  }

  &:hover {
    background-color: #474747;
    color: #eaeaea;
    border: 1.5px solid #2b2b2b;
  }

  &:focus {
    border-color: #474747;
    background-color: #474747;
    color: #eaeaea;
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

  &:hover {
    background-color: #474747;
    color: #eaeaea;
    border: 1.5px solid #2b2b2b;
  }

  &:focus {
    border-color: #474747;
    background-color: #474747;
    color: #eaeaea;
  }
`;

export const CustomTooltip = styled(Tooltip)`
  .ant-tooltip-arrow {
    display: none;
  }
`;

export const HoverButton = styled(AntButton)`
  background-color: #44d4c6;
  border-color: #44d4c6;
  color: #000;

  &:hover {
    color: #fff;
  }
`;
