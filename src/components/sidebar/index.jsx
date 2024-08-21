import React, { useState } from 'react';
import { Tooltip, ConfigProvider, Modal } from 'antd';
import { 
  BulbOutlined, 
  CommentOutlined, 
  RobotOutlined, 
  SettingOutlined, 
  SolutionOutlined, 
  UserOutlined, 
  QuestionCircleOutlined, 
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { 
  SidebarContainer, 
  SidebarContent, 
  SidebarLink, 
  HamburgerIcon, 
  CloseIcon, 
  SidebarContentTopIcons, 
  SidebarContentBottomIcons, 
  SidebarLinkBottomIcons, 
  SidebarContentAdminIcons 
} from './styles';
import NewTicketPage from '../../pages/newTicketPage';
import PromptPage from '../../pages/promptPage';
import NewTrainingPage from '../../pages/newTrainingPage';

const ToolsModalSidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Inicialmente aberto
  const [modalContent, setModalContent] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleSidebar = () => {
    console.log(`Toggling sidebar. Current state: ${isOpen}`);
    setIsOpen(prev => {
      const newState = !prev;
      console.log(`New sidebar state: ${newState}`);
      return newState;
    });
  };

  const customTheme = {
    token: {
      fontSize: 11,
      padding: 3,
    },
  };

  const handleLinkClick = (page) => {
    console.log(`Link clicked: ${page}`);
    setModalContent(page);
    setIsModalVisible(true);
    toggleSidebar(); // Fecha o sidebar ao clicar em um link
  };

  const handleModalCancel = () => {
    console.log('Modal closed');
    setIsModalVisible(false);
  };

  const renderModalContent = () => {
    console.log(`Rendering modal content for: ${modalContent}`);
    switch (modalContent) {
      case 'chat':
        return <div>Chat Content</div>; // Substitua por conteúdo real
      case 'prompt':
        return <PromptPage visible={isModalVisible} onClose={handleModalCancel} />;
      case 'newTicket':
        return <NewTicketPage visible={isModalVisible} onClose={handleModalCancel} />;
      case 'newTraining':
        return <NewTrainingPage visible={isModalVisible} onClose={handleModalCancel} />;
      default:
        return null;
    }
  };

  return (
    <>
      <ConfigProvider theme={customTheme}>
        <SidebarContainer isOpen={isOpen}>
          {isOpen ? (
            <CloseIcon onClick={() => {
              console.log('Close icon clicked');
              toggleSidebar();
            }}>
              <MenuUnfoldOutlined style={{ fontSize: '1rem', color: 'gray' }} />
            </CloseIcon>
          ) : (
            <>
    
              <HamburgerIcon onClick={() => {
                console.log('HamburgerIcon clicked');
                toggleSidebar();
              }}></HamburgerIcon>
            </>
          )}
          <SidebarContent>
            <SidebarContentTopIcons>
              <SidebarLink href="#" onClick={() => handleLinkClick('chat')}>
                <Tooltip title="Chat" placement="left">
                  <CommentOutlined className="sidebar-icon" style={{ marginRight: '0.5rem', color: '#44D4C6' }} />
                </Tooltip>
              </SidebarLink>
              <SidebarLink href="#" onClick={() => handleLinkClick('prompt')}>
                <Tooltip title="Novo Ticket" placement="left">
                  <BulbOutlined className="sidebar-icon" style={{ marginRight: '0.5rem', color: '#44D4C6' }} />
                </Tooltip>
              </SidebarLink>
              <SidebarLink href="#" onClick={() => handleLinkClick('newTicket')}>
                <Tooltip title="Prompt" placement="left">
                  <SolutionOutlined className="sidebar-icon" style={{ marginRight: '0.5rem', color: '#44D4C6' }} />
                </Tooltip>
              </SidebarLink>
            </SidebarContentTopIcons>
            <SidebarContentAdminIcons>
              <SidebarLink href="#" onClick={() => handleLinkClick('newTraining')}>
                <Tooltip title="Novo Treinamento" placement="left">
                  <RobotOutlined className="sidebar-icon" style={{ marginRight: '0.5rem', color: '#D0F8F4' }} />
                </Tooltip>
              </SidebarLink>
            </SidebarContentAdminIcons>
            <SidebarContentBottomIcons>
              <SidebarLinkBottomIcons href="#">
                <Tooltip title="Configurações" placement="left">
                  <SettingOutlined className="sidebar-icon" style={{ marginRight: '0.5rem', color: '#5c6060' }} />
                </Tooltip>
              </SidebarLinkBottomIcons>
              <SidebarLinkBottomIcons href="#">
                <Tooltip title="Perfil" placement="left">
                  <UserOutlined className="sidebar-icon" style={{ marginRight: '0.5rem', color: '#5c6060' }} />
                </Tooltip>
              </SidebarLinkBottomIcons>
              <SidebarLinkBottomIcons href="#">
                <Tooltip title="Ajuda" placement="left">
                  <QuestionCircleOutlined className="sidebar-icon" style={{ marginRight: '0.5rem', color: '#5c6060' }} />
                </Tooltip>
              </SidebarLinkBottomIcons>
            </SidebarContentBottomIcons>
          </SidebarContent>
        </SidebarContainer>
      </ConfigProvider>

      <Modal
        title="Detalhes"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        {renderModalContent()}
      </Modal>
    </>
  );
};

export default ToolsModalSidebar;
