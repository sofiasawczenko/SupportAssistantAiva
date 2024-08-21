import React, { useState, useRef, useEffect } from 'react';
import ToolsModalSidebar from './components/sidebar';
import { WelcomeModal } from './pages/chatPage'; 
import { CommentOutlined, ScanOutlined, DeleteOutlined, UploadOutlined, CloseOutlined } from '@ant-design/icons';
import { FloatButton as AntFloatButton } from 'antd';
import ChatPage from './pages/chatPage';
import NewTicketPage from './pages/newTicketPage';
import NewTrainingPage from './pages/newTrainingPage';
import PromptPage from './pages/promptPage';

// Importe a imagem
import SofttekLogo from '../src/assets/ImgSofttekLogo.png'; // Caminho da imagem
import AvatarImg from '../src/assets/ImgAvatar.jpg'; // Caminho do avatar
import AvatarImg2 from '../src/assets/ImgAvatar2.jpg'; // Caminho do avatar

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [screenshot, setScreenshot] = useState(null);
  const [showOptionsBar, setShowOptionsBar] = useState(false);
  const [isSnipping, setIsSnipping] = useState(false);
  const [selectionBox, setSelectionBox] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const snipAreaRef = useRef(null);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  const openModal = (page) => {
    console.log(`Abrindo modal para: ${page}`);
    setCurrentPage(page);
    setModalOpen(true);
    setSidebarOpen(true);
  };

  const closeModal = () => {
    console.log("Fechando modal...");
    {console.log("Estado do modal:", isModalOpen)}
    setModalOpen(false);
    setSidebarOpen(false);
  };

  const startSnipping = () => {
    setIsSnipping(true);
    setScreenshot(null);
    setSelectionBox(null);

    let startX = 0;
    let startY = 0;

    const handleMouseDown = (e) => {
      startX = e.clientX;
      startY = e.clientY;
      setSelectionBox({ x: startX, y: startY, width: 0, height: 0 });
    };

    const handleMouseMove = (e) => {
      if (!selectionBox) return;

      const newWidth = e.clientX - startX;
      const newHeight = e.clientY - startY;

      const updatedSelectionBox = {
        x: newWidth < 0 ? e.clientX : startX,
        y: newHeight < 0 ? e.clientY : startY,
        width: Math.max(0, Math.abs(newWidth)),
        height: Math.max(0, Math.abs(newHeight)),
      };

      setSelectionBox(updatedSelectionBox);
    };

    const handleMouseUp = () => {
      setIsSnipping(false);

      setTimeout(() => {
        setShowOptionsBar(true);
      }, 500);

      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    return () => {
      setSelectionBox(null);
    };
  }, []);

  const renderPageContent = () => {
    switch (currentPage) {
      case 'chat':
        return <ChatPage />;
      case 'academy':
        return <PromptPage />;
      case 'newTicket':
        return <NewTicketPage />;
      case 'newTraining':
        return <NewTrainingPage />;
      default:
        return null;
    }
  };

  return (
    <div style={{
      position: 'fixed',
      left: '0',
      top: '2rem',
  }}>
    <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '4rem', marginTop: '2rem' }}>
      {/* Insira o avatar */}
      <img
        src={AvatarImg}
        alt="Avatar"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          marginRight: '1rem',
        }}
      />
  
      {/* Balão de conversa */}
      <div
        style={{
          backgroundColor: '#f0f0f0',
          padding: '1rem',
          borderRadius: '15px',
          maxWidth: '60%',
          position: 'relative',
        }}
      >
        <p style={{ left: '2rem', fontSize: '0.9rem', color: '#000', margin: 0 }}>
          Olá, preciso alterar meu acesso no sistema SAP
        </p>
  
        {/* Seta do balão */}
        <div
          style={{
            content: '""',
            position: 'absolute',
            left: '-10px',
            top: '20px',
            width: 0,
            height: 0,
            border: '10px solid transparent',
            borderRightColor: '#f0f0f0',
            borderLeft: 0,
            marginTop: '-10px',
          }}
        ></div>
      </div>
    </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
        {/* Balão de conversa */}
        <div
          style={{
            backgroundColor: '#f0f0f0',
            padding: '1rem',
            borderRadius: '15px',
            maxWidth: '60%',
            position: 'relative',
            marginRight: '1rem', // Espaço entre o balão e o avatar
          }}
        >
          <p style={{ fontFamily: 'Fira Sans Condensed, sans-serif', fontSize: '0.9rem', color: '#000', margin: 0 }}>
            Olá! Claro.  Para realizar a alteração do seu acesso no sistema, vou precisar dos seguintes itens:</p>
            <p style={{ fontSize: '0.9rem', color: '#000', margin: 0 }}><strong>1.</strong> Seu nome completo;</p>
            <p style={{ fontSize: '0.9rem', color: '#000', margin: 0 }}><strong>2.</strong>O tipo de alteração de acesso que você precisa (por exemplo, o perfil ou grupo);</p>
            <p style={{ fontSize: '0.9rem', color: '#000', margin: 0 }}><strong>3.</strong>Confirmação se o chamado já foi aberto com autorização das colaboradoras responsáveis.</p>
            <p style={{ fontSize: '0.9rem', color: '#000', margin: 0 }}>Caso você seja da localidade Anápolis/Brainfarma, precisaremos da documentação técnica correspondente.
          </p>

          {/* Seta do balão */}
          <div
            style={{
              content: '""',
              position: 'absolute',
              right: '-10px', // Alinhado à direita do balão
              top: '20px',
              width: 0,
              height: 0,
              border: '10px solid transparent',
              borderLeftColor: '#f0f0f0', // Cor do balão
              borderRight: 0,
              marginTop: '-10px',
            }}
          ></div>
        </div>

        {/* Insira o avatar */}
        <img
          src={AvatarImg2}
          alt="Avatar"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
          }}
        />
      </div>


      <div style={{
}}>
  <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '4rem', marginTop: '2rem' }}>
    <img
      src={AvatarImg}
      alt="Avatar"
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '1rem',
      }}
    />

    <div
      style={{
        backgroundColor: '#f0f0f0',
        padding: '1rem',
        borderRadius: '15px',
        maxWidth: '60%',
        position: 'relative',
        marginRight: '1rem',
      }}
    >
      <p style={{ left: '2rem', fontSize: '0.9rem', color: '#000', margin: 0 }}>
        Meu nome completo é Mariana da Silva, e eu preciso que meu perfil seja alterado para o perfil de <strong>"Administração de Recursos"</strong>. O chamado já foi aberto com as devidas autorizações.
      </p>

      {/* Seta do balão */}
      <div
        style={{
          content: '""',
          position: 'absolute',
          left: '-10px',
          top: '20px',
          width: 0,
          height: 0,
          border: '10px solid transparent',
          borderRightColor: '#f0f0f0',
          borderLeft: 0,
          marginTop: '-10px',
        }}
      ></div>
    </div>
  </div>
</div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>


{/* Balão de conversa */}
  <div
    style={{
      backgroundColor: '#f0f0f0',
      padding: '1rem',
      borderRadius: '15px',
      maxWidth: '60%',
      position: 'relative',
      marginRight: '1rem', // Espaço entre o balão e o avatar
    }}
  >
    <p style={{ fontSize: '0.9rem', color: '#000', marginBottom: '10px', marginTop: '0px' }}>
          Ótimo, Mariana! Vou te passar um passo a passo para que você mesmo possa realizar a alteração no sistema SAP. Veja como proceder:</p>
          <p style={{ fontSize: '0.9rem', color: '#000', margin: 0 }}> <strong>1.Acesse o SAP</strong> em http://SAP.com.br e faça login.</p>
          <p style={{ fontSize: '0.9rem', color: '#000', margin: 0 }}><strong>2.</strong> No menu superior, vá para “Administração” e selecione <strong>“Controle de Acesso”.</strong></p>
          <p style={{ fontSize: '0.9rem', color: '#000', margin: 0 }}><strong>3.</strong> Clique em <strong>“Usuário”</strong> e busque pelo seu nome (Mariana da Silva).</p>
          <p style={{ fontSize: '0.9rem', color: '#000', margin: 0 }}><strong>4.</strong> Selecione seu nome para abrir o cadastro e vá para <strong>“Ação > Editar Usuário”</strong>.</p>
          <p style={{ fontSize: '0.9rem', color: '#000', margin: 0 }}><strong>5.</strong> Em “Pertence aos grupos”, marque o grupo desejado (ex.: “Administração de Recursos”).</p>
          <p style={{ fontSize: '0.9rem', color: '#000', margin: 0 }}><strong>6.</strong> Na aba <strong>“Atribuições”</strong>, escolha o novo acesso.</p>
          <p style={{ fontSize: '0.9rem', color: '#000', margin: 0 }}><strong>7.</strong> Salve as alterações em <strong>“Ação > Salvar Usuário”</strong>.</p>

              {/* Seta do balão */}
    <div
      style={{
        content: '""',
        position: 'absolute',
        right: '-10px', // Alinhado à direita do balão
        top: '20px',
        width: 0,
        height: 0,
        border: '10px solid transparent',
        borderLeftColor: '#f0f0f0', // Cor do balão
        borderRight: 0,
        marginTop: '-10px',
      }}
    ></div>
  </div>

  {/* Insira o avatar */}
  <img
    src={AvatarImg2}
    alt="Avatar"
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '50%',
    }}
  />
</div>

      <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '4rem', marginTop: '2rem' }}>
        {/* Insira o avatar */}
        <img
          src={AvatarImg}
          alt="Avatar"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '1rem',
          }}
        />

        {/* Balão de conversa */}
        <div
          style={{
            backgroundColor: '#f0f0f0',
            padding: '1rem',
            borderRadius: '15px',
            maxWidth: '60%',
            position: 'relative',
            marginRight: '1rem', // Espaço entre o balão e o avatar
          }}
        >
          <p style={{ left: '2rem', fontSize: '0.9rem', color: '#000', margin: 0 }}>
          Obrigado pelo passo a passo! Vou tentar fazer agora.
          </p>

          {/* Seta do balão */}
          <div
            style={{
              content: '""',
              position: 'absolute',
              left: '-10px',
              top: '20px',
              width: 0,
              height: 0,
              border: '10px solid transparent',
              borderRightColor: '#f0f0f0',
              borderLeft: 0,
              marginTop: '-10px',
            }}
          ></div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>

        {/* Balão de conversa */}
        <div
          style={{
            backgroundColor: '#f0f0f0',
            padding: '1rem',
            borderRadius: '15px',
            maxWidth: '60%',
            position: 'relative',
            right: '0',
            marginRight: '1rem', // Espaço entre o balão e o avatar
          }}
        >
          <p style={{ left: '2rem', fontSize: '0.9rem', color: '#000', margin: 0 }}>
          Sem problemas, Mariana! Caso tenha qualquer dúvida durante o processo, estamos à disposição para ajudar.
          </p>

              {/* Seta do balão */}
    <div
      style={{
        content: '""',
        position: 'absolute',
        right: '-10px', // Alinhado à direita do balão
        top: '20px',
        width: 0,
        height: 0,
        border: '10px solid transparent',
        borderLeftColor: '#f0f0f0', // Cor do balão
        borderRight: 0,
        marginTop: '-10px',
      }}
    ></div>
  </div>

  {/* Insira o avatar */}
  <img
    src={AvatarImg2}
    alt="Avatar"
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '50%',
    }}
  />
</div>

      {isSidebarOpen && (
        <ToolsModalSidebar 
          openModal={openModal} 
          closeSidebar={() => setSidebarOpen(false)} 
        />
      )}

      <WelcomeModal isOpen={isModalOpen} onClick={closeModal}>
        {renderPageContent()}
      </WelcomeModal>

      <AntFloatButton.Group
        trigger="hover"
        style={{ zIndex: 1 }}
        icon={<img src="/faviconAIVA.png" alt="Menu Icon" style={{ position: 'fixed', width: '1.4rem', height: '1.4rem', right: '2rem', bottom: '3.5rem' }} />}
      >
        <AntFloatButton 
          icon={<ScanOutlined />} 
          onClick={startSnipping} 
          style={{ zIndex: 1 }} 
        />
        <AntFloatButton 
          icon={<CommentOutlined />} 
          onClick={() => openModal('chat')} 
        />
      </AntFloatButton.Group>

      {showOptionsBar && (
        <div style={{
          position: 'fixed',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#0F1216', 
          color: '#fff',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
          borderRadius: '8px', 
        }}>
          <button 
            onClick={() => { 
              setScreenshot(null);
              setShowOptionsBar(false); 
            }} 
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#fff', 
              cursor: 'pointer',
            }}
          >
            <DeleteOutlined style={{ fontSize: '1rem' }} />
          </button>
          <button 
            onClick={() => { 
              console.log("Processar captura"); 
              setShowOptionsBar(false); 
            }} 
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#fff', 
              cursor: 'pointer',
            }}
          >
            <UploadOutlined style={{ fontSize: '1rem' }} />
          </button>
          <button 
            onClick={() => setShowOptionsBar(false)} 
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#fff', 
              cursor: 'pointer',
            }}
          >
            <CloseOutlined style={{ fontSize: '1rem' }} />
          </button>
        </div>
      )}

      {screenshot && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <img src={screenshot} alt="Screenshot" style={{ width: '50%', border: '2px solid #000' }} />
        </div>
      )}

      {selectionBox && (
        <div
          ref={snipAreaRef}
          style={{
            position: 'absolute',
            top: selectionBox.y,
            left: selectionBox.x,
            width: Math.abs(selectionBox.width),
            height: Math.abs(selectionBox.height),
            border: '1px dashed #000',
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: 9999,
          }}
        />
      )}
      <img 
        src={SofttekLogo} 
        alt="Softtek Logo" 
        style={{ 
          position: 'absolute', 
          bottom: '0', 
          right: '0', 
          width: '80px', 
          height: 'auto', 
          left: '20%',
          margin: '-13rem' // Opcional: para adicionar um pouco de espaço ao redor
        }} 
      />
    </div>
  );
};

export default App;
