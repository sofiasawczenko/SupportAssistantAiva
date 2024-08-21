import styled from 'styled-components';
import { MenuFoldOutlined } from '@ant-design/icons';

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-2.8rem')}; 
  transition: width 0.3s ease;
  width: 2.8rem; 
  height: 100%;
  background-color: #171A1E;
  transition: right 0.3s ease;
  z-index: 1001;
`;

export const SidebarContent = styled.div`
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
`;

export const SidebarContentTopIcons = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SidebarContentAdminIcons = styled.div`
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SidebarContentBottomIcons = styled.div`
  margin-top: 25rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const CloseIcon = styled.button`
  z-index: 1100;
  position: fixed;
  top: 1rem;
  right: 0.7rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const SidebarLinkBottomIcons = styled.a`
  top: 2rem;
  color: #fff;
  text-decoration: none;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  
  .sidebar-icon {
    transition: transform 0.3s ease, color 0.3s ease;
  }

  &:hover .sidebar-icon {
    color: #FF5733;
    transform: scale(1.2);
  }
`;

export const SidebarLink = styled.a`
  top: 2rem;
  color: #fff;
  text-decoration: none;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  
  .sidebar-icon {
    transition: transform 0.3s ease, color 0.3s ease;
  }

  &:hover {
    background: radial-gradient(circle, rgba(68, 212, 198, 0.15), transparent);
    border-radius: 10px;
  }

  &:hover .sidebar-icon {
    color: #FF5733;
    transform: scale(1.2);
  }
`;

export const HamburgerIcon = styled(MenuFoldOutlined)`
  position: absolute;
  top: 0.9rem;
  left: -2rem;
  cursor: pointer;
  font-size: 1.2rem;
  color: #44D4C6;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ddd;
  }
`;

export const MenuFoldOutlinedStyled = styled(MenuFoldOutlined)`
  
  &:hover {
    color: #ddd;
  }
`;
