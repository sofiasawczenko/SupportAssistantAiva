import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  background-color: ${props => props.sender === 'bot' ? '#fff' : '#f1f1f1'};
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  max-width: 70%;
  word-wrap: break-word;
  margin: 8px auto;
`;

const ChatMessage = ({ type, content }) => {
  if (type === 'text') {
    return <MessageWrapper>{content}</MessageWrapper>;
  }

  if (type === 'image') {
    return <img src={content} alt="Captured" style={{ maxWidth: '100%' }} />;
  }

  return null;
};

export default ChatMessage;
