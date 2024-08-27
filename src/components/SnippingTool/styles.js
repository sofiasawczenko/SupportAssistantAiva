import styled from 'styled-components';

export const Selection = styled.div`
  position: absolute;
  background: transparent;
  border: 1px solid #0c65a5;
  &.complete {
    background: transparent;
    border-color: #0CA50E;
  }
`;

export const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Dialog = styled.div`
  text-align: center;
`;

export const Canvas = styled.canvas`
  cursor: crosshair;
  margin: 5px;
`;
