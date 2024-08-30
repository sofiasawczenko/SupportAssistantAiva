import React, { useState } from 'react';
import { Drawer, FloatButton } from 'antd';
import Chatbot from './components/chatbot';
import PromptGeneratorPage from './pages/TemplatePage';
import Menu from './components/Menu';
import TicketForm from './pages/TicketPage';
import TrainingForm from './pages/Training';
import ProfilePage from './pages/ProfilePage';
import { AppWrapper, StyledDrawer } from './styles';
import TextSelectionTool from './components/TextSelectionTool';
import SnippingTool from './components/SnippingTool';
import faviconAIVA from './assets/faviconAIVA.png';

const App = () => {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [selectedPage, setSelectedPage] = useState('chatbot');
  const [chatbotMessages, setChatbotMessages] = useState([]);

  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const toggleMenu = () => setShowMenu(prevState => !prevState);

  const handleTextSelect = (text) => {
    setChatbotMessages(prevMessages => [
      ...prevMessages,
      { type: 'user', content: text }
    ]);
  };

  const renderContent = () => {
    switch (selectedPage) {
      case 'chatbot':
        return <Chatbot messages={chatbotMessages} />;
      case 'form':
        return <PromptGeneratorPage />;
      case 'ticket':
        return <TicketForm />;
      case 'training':
        return <TrainingForm />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <Chatbot messages={chatbotMessages} />;
    }
  };

  const getTitle = () => {
    const titles = {
      chatbot: 'Assistente de Suporte',
      form: 'Novo Template - Gerador de Prompt',
      ticket: 'Novo Ticket - Gerador de Ticket',
      training: 'Treinamento da Inteligência Artificial',
      profile: 'Meu Perfil'
    };
    return titles[selectedPage] || titles.chatbot;
  };

  return (
    <AppWrapper>
      <SnippingTool />
      <TextSelectionTool onTextSelect={handleTextSelect} />
      <FloatButton
        shape="square"
        style={{
          insetInlineEnd: 29,
          bottom: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          height: 15,
          backgroundColor: '#D0F8F4'
        }}
        icon={
          <img
            src={faviconAIVA}
            alt="Chatbot Icon"
            style={{
              width: 23,
              height: 24
            }}
          />
        }
        onClick={showDrawer}
      />
      <StyledDrawer
        title={
          <div
            style={{
              backgroundColor: '#232323',
              color: '#fff',
              padding: '8px',
              borderRadius: '4px'
            }}
          >
            {getTitle()}
          </div>
        }
        placement="right"
        onClose={closeDrawer}
        open={open}
        width={showMenu ? 600 : 500}
        mask={false}
        bodyStyle={{
          backgroundColor: '#2B2B2B'
        }}
      >
        <div style={{ display: 'flex' }}>
          {showMenu && <Menu onSelect={setSelectedPage} />}
          <div
            style={{
              width: showMenu ? 'calc(100% - 60px)' : '100%'
            }}
          >
            {renderContent()}
          </div>
        </div>
      </StyledDrawer>
      <div
        style={{
          color: '#00093C',
          padding: '16px',
          maxWidth: '800px',
          margin: '0 auto'
        }}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae justo gravida, ac fermentum purus bibendum. Praesent euismod lorem ut lorem aliquam, at vehicula libero facilisis. Quisque auctor scelerisque justo, eu gravida mauris viverra eget. Mauris tincidunt nisi nec est ultricies, a fermentum elit placerat. Curabitur vehicula nisi a est dapibus, id dignissim purus efficitur. Fusce varius nisi et lacus tincidunt, a fermentum arcu cursus. Donec non convallis sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <p>Sed ac metus et velit facilisis feugiat. Duis at orci nec orci ultricies gravida. Nullam aliquam dolor at eros dictum, non gravida ligula vehicula. In auctor turpis ut dui ullamcorper, sit amet vestibulum est viverra. Phasellus tristique magna nec massa faucibus, a fermentum est cursus. Nam vel ligula eu metus vehicula feugiat. Aenean tristique convallis risus, id rhoncus risus aliquet non. Aliquam erat volutpat. Sed suscipit fringilla nisl, ac tincidunt velit scelerisque eget.</p>
        <p>Maecenas vulputate, felis at fermentum pretium, libero velit auctor est, ut feugiat lacus odio et lacus. Etiam fringilla sem nec malesuada consectetur. Nullam consectetur auctor lorem, ac sollicitudin justo venenatis vel. Integer pharetra arcu id lectus lobortis venenatis. Duis quis nulla a dolor gravida dignissim. Vestibulum interdum ligula at quam feugiat auctor. Cras varius bibendum turpis, non ultrices felis aliquet vel. Pellentesque volutpat massa at eros pharetra, sit amet tincidunt nisi auctor. Integer scelerisque libero et lacinia sollicitudin. Donec aliquam tristique dolor, at aliquet nunc consequat nec.</p>
      </div>
    </AppWrapper>
  );
};

export default App;
