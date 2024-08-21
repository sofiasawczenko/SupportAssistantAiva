// src/pages/chatPage/index.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { PaperClipOutlined } from '@ant-design/icons';
import {
  CloseButton,
  ModalContainer,
  ModalContent,
  UserGreetingHeader,
  UserGreetingSubHeader,
  InputModalContainer,
  InputModalOptionsContainer,
  StyledSwitch,
  TextInputSwitch,
  StyledUploadContainer,
  StyledUpload,
} from './styles';
import ToolsModalSidebar from '../../components/sidebar'; 
import ChatBot from '../../components/chatbot';
import NewTicketPage from '../../pages/newTicketPage'; 

// Componente ImageSendText
const ImageSendText = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ cursor: 'pointer' }} />
);

// Definição do componente WelcomeModal
const WelcomeModal = ({ isOpen, onClick, children }) => {
  if (!isOpen) return null; 

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ToolsModalSidebar />
        <CloseButton onClick={onClick}>❌</CloseButton>
        <UserGreetingHeader>
          <p>Olá, Bianca!</p>
        </UserGreetingHeader>
        <UserGreetingSubHeader>
          <p>Como eu posso te ajudar hoje?</p>
        </UserGreetingSubHeader>
        
   
        <ChatBot />

  
        <NewTicketPage />

        {children}
      </ModalContent>
    </ModalContainer>
  );
};


const InputFieldWelcomeModal = () => (
  <InputModalContainer>
    <InputModalOptionsContainer>
      <StyledUploadContainer>
        <StyledUpload>
          <PaperClipOutlined 
            style={{ 
              fontSize: '20px', 
              marginTop: '130px',
              right: '-150%',
              color: '#44D4C6', 
              cursor: 'pointer',
              position: 'fixed',
            }} 
          />
          <input 
            id="file-input" 
            type="file" 
            style={{ display: 'none' }} 
          />
        </StyledUpload>
      </StyledUploadContainer>
      <StyledSwitch size="small" defaultChecked onChange={(checked) => console.log(`switch to ${checked}`)} />
      <TextInputSwitch placeholder="Meu histórico" />
    </InputModalOptionsContainer>
  </InputModalContainer>
);

// Definindo as PropTypes
WelcomeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const ChatPage = () => {
  const [isModalOpen, setModalOpen] = React.useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <WelcomeModal isOpen={isModalOpen} onClick={closeModal}>
        <InputFieldWelcomeModal />
      </WelcomeModal>
    </div>
  );
};


export { WelcomeModal, InputFieldWelcomeModal };
export default ChatPage;
