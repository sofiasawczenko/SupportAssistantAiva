import React, { useState } from 'react';
import { MenuWrapper, IconWrapper, MenuBottomIcons, MenuTopIcons } from './styles';
import { Tooltip } from 'antd';
import { 
  MenuOutlined,
  SearchOutlined, 
  CommentOutlined, 
  RobotOutlined, 
  SettingOutlined, 
  SolutionOutlined, 
  UserOutlined, 
} from '@ant-design/icons';

const Menu = ({ onSelect }) => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [activeItem, setActiveItem] = useState('chatbot');

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleIconClick = (item) => {
    setActiveItem(item);
    onSelect(item);
  };

  return (
    <>
      {!menuVisible && (
        <IconWrapper onClick={toggleMenu} style={{ color: '#797979', position: 'absolute', top: 16, right: 20 }}>
          <Tooltip title="Abrir Menu">
            <MenuOutlined style={{ fontSize: '20px' }} />
          </Tooltip>
        </IconWrapper>
      )}

      {menuVisible && (
        <MenuWrapper>
          <IconWrapper onClick={toggleMenu} style={{ color: '#797979', position: 'relative', marginBottom: '4rem' }}>
            <Tooltip title="Fechar Menu">
              <MenuOutlined style={{ fontSize: '20px' }} />
            </Tooltip>
          </IconWrapper>
          <MenuTopIcons>
            <IconWrapper 
              onClick={() => handleIconClick('chatbot')} 
              style={{ color: activeItem === 'chatbot' ? '#1890ff' : '#797979', fontSize: activeItem === 'chatbot' ? '26px' : '22px', marginBottom: '1.7rem' }}
            >
              <Tooltip title="Chat" placement="left">
                <CommentOutlined />
              </Tooltip>
            </IconWrapper>

            <IconWrapper 
              onClick={() => handleIconClick('form')} 
              style={{ color: activeItem === 'form' ? '#1890ff' : '#797979', fontSize: activeItem === 'form' ? '26px' : '22px', marginBottom: '1.7rem' }}
            >
              <Tooltip title="Templates" placement="left">
                <SolutionOutlined />
              </Tooltip>
            </IconWrapper>

            <IconWrapper 
              onClick={() => handleIconClick('ticket')} 
              style={{ color: activeItem === 'ticket' ? '#1890ff' : '#797979', fontSize: activeItem === 'ticket' ? '26px' : '22px', marginBottom: '1.7rem' }}
            >
              <Tooltip title="Novo Ticket" placement="left">
                <SearchOutlined />
              </Tooltip>
            </IconWrapper>

            <IconWrapper 
              onClick={() => handleIconClick('training')} 
              style={{ color: activeItem === 'training' ? '#1890ff' : '#797979', fontSize: activeItem === 'training' ? '26px' : '22px', marginBottom: '1.7rem' }}
            >
              <Tooltip title="Novo Treinamento" placement="left">
                <RobotOutlined />
              </Tooltip>
            </IconWrapper>
            <IconWrapper 
              onClick={() => handleIconClick('profile')} 
              style={{ color: activeItem === 'profile' ? '#1890ff' : '#797979', fontSize: activeItem === 'profile' ? '26px' : '22px'}}
            >
              <Tooltip title="Perfil" placement="left">
                <UserOutlined />
              </Tooltip>
            </IconWrapper>
            </MenuTopIcons>
          {/* <MenuBottomIcons>
            <IconWrapper 
              onClick={() => handleIconClick('settings')} 
              style={{ color: activeItem === 'settings' ? '#1890ff' : '#797979', fontSize: activeItem === 'settings' ? '26px' : '22px', marginBottom: '1.7rem' }}
            >
              <Tooltip title="Configurações" placement="left">
                <SettingOutlined />
              </Tooltip>
            </IconWrapper>
          </MenuBottomIcons> */}
        </MenuWrapper>
      )}
    </>
  );
};

export default Menu;
