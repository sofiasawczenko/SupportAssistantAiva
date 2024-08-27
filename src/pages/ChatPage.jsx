import React, { useState } from 'react';
import SnippingTool from './SnippingTool';
import TextSelectionTool from './TextSelectionTool';
import Chatbot from './Chatbot';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  const handleCaptureImage = (imageData) => {
    setMessages([...messages, { type: 'image', content: imageData }]);
  };

  const handleSendText = (text) => {
    setMessages([...messages, { type: 'text', content: text }]);
  };

  return (
    <div>
      <SnippingTool onCapture={handleCaptureImage} />
      <TextSelectionTool onTextSelect={handleSendText} />
      <Chatbot messages={messages} />
    </div>
  );
};

export default ChatPage;
