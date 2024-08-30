import styled from 'styled-components';
import { Button, Drawer as AntDrawer } from 'antd';

export const AppWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #f2f2f2;
  overflow: auto;
  line-height: 1.6;
  text-align: justify;
`;

export const StyledDrawer = styled(AntDrawer)`
  .ant-drawer-content {
    background-color: #232323;
  }

  .ant-drawer-header {
    background-color: #232323;
  }

  .ant-drawer-title {
    color: #2b2b2b;
  }

  .ant-drawer-close {
    color: #d3d3d3;
    background-color: transparent;
    border: none;
  }

  .ant-drawer-close:hover {
    color: #b0b0b0;
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
