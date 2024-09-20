import React, { useState, useEffect } from "react";
import Chatbot from "./components/chatbot";
import Menu from "./components/Menu";
import ProfilePage from "./pages/ProfilePage";
import PromptGeneratorPage from "./pages/TemplatePage";
import TicketForm from "./pages/TicketPage";
import TrainingForm from "./pages/Training";
import { AppWrapper } from "./styles";

const App = () => {
  const [open, setOpen] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const [selectedPage, setSelectedPage] = useState("chatbot");
  const [chatbotMessages, setChatbotMessages] = useState([]);

  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const toggleMenu = () => setShowMenu((prevState) => !prevState);

  const handleTextSelect = (text) => {
    setChatbotMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", content: text },
    ]);
  };
  

  const renderContent = () => {
    switch (selectedPage) {
      case "chatbot":
        return <Chatbot messages={chatbotMessages} />;
      case "form":
        return <PromptGeneratorPage />;
      case "ticket":
        return <TicketForm />;
      case "training":
        return <TrainingForm />;
      case "profile":
        return <ProfilePage />;
      default:
        return <Chatbot messages={chatbotMessages} />;
    }
  };

  const getTitle = () => {
    const titles = {
      chatbot: "Assistente de Suporte",
      form: "Novo Template - Gerador de Prompt",
      ticket: "Novo Ticket - Gerador de Ticket",
      training: "Treinamento da Inteligência Artificial",
      profile: "Meu Perfil",
    };
    return titles[selectedPage] || titles.chatbot;
  };

  React.useEffect(() => {
    const handleOpenDrawer = () => {
      setOpen(true);
    };
    
  
    const handleSendText = (event) => {
      const { text } = event.detail;
      setChatbotMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", content: text },
      ]);
    };
  
    window.addEventListener("sendTextToChatbot", handleSendText);
    window.addEventListener("openDrawerEvent", handleOpenDrawer);
  
    return () => {
      window.removeEventListener("sendTextToChatbot", handleSendText);
      window.removeEventListener("openDrawerEvent", handleOpenDrawer);
    };
  }, []);
  

  

  return (
    <AppWrapper>
      <main style={{ display: "flex" }}>
        {renderContent()}
        {showMenu && <Menu onSelect={setSelectedPage} />}
      </main>
    </AppWrapper>
  );
};

export default App;
