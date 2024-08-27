import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  background-color: #fff;
  padding: 45px;
  font-size: 1rem;
  color: #333;
  margin-top: -3rem;
  overflow-x: hidden;
`;


export const UploadButton = styled.div`
  margin: 20px 0;

  input[type="file"] {
    display: none;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
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

export const StyledText = styled.span`
  font-size: 14px;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: bold;
  color: #333;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const StyledSubText = styled.span`
  font-family: "Fira Sans Condensed", sans-serif;
  font-size: 14px;
  text-align: justify;
`;