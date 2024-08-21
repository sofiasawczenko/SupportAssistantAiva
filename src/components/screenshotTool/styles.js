import styled from 'styled-components';

const SelectionBox = styled.div`
  position: absolute;
  background: transparent;
  border: 1px solid #0c65a5;
  &.complete {
    border-color: #0CA50E;
  }
`;

const Dialog = styled.div`
  text-align: center;
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;