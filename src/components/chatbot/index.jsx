import React, { useState, useRef, useEffect } from 'react';
import { ChatBox, ChatInput, ChatSubmit, ChatLogs, ChatMsg, CmMsgText, ChatBoxBody, ChatBoxToggle } from './styles';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(true); // Initialize to true
  const chatBoxRef = useRef(null);
  const inputRef = useRef(null); // Reference to the input field

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    setMessages([...messages, { text: inputValue, type: 'self' }]);
    setInputValue('');

    // Simulate a delay for the bot response
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { 
        text: `
       Para alterar seu acesso no SAP, acesse o sistema em http://SAP.com.br e faça login. No menu superior, vá para “Administração” e selecione “Controle de Acesso”. Clique em “Usuário” e busque pelo seu nome, como por exemplo, Mariana da Silva. Selecione seu nome para abrir o cadastro e vá para “Ação > Editar Usuário”. Em “Pertence aos grupos”, marque o grupo desejado, como “Administração de Recursos”. Na aba “Atribuições”, escolha o novo acesso que você precisa. Finalmente, salve as alterações em “Ação > Salvar Usuário”.`,
        type: 'user'
      }]);
    }, 1000);
  };

  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  // Focus the input field when the chat is open
  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  return (
    <>
      <ChatBox className={isChatOpen ? 'active' : ''} ref={chatBoxRef}>
        <ChatBoxBody>
          <ChatLogs>
            {messages.map((msg, index) => (
              <ChatMsg key={index} className={msg.type}>
                <CmMsgText type={msg.type}>{msg.text}</CmMsgText>
              </ChatMsg>
            ))}
          </ChatLogs>
          <ChatInput>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escreva a sua dúvida"
                ref={inputRef} // Set the reference
              />
              <ChatSubmit type="submit">
                <img src="/ImgSendText.png" alt="Send"/>
              </ChatSubmit>
            </form>
          </ChatInput>
        </ChatBoxBody>
      </ChatBox>
    </>
  );
};

export default Chatbot;
