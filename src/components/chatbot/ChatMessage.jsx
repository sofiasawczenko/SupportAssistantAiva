import React from "react";
import styled from "styled-components";

const MessageWrapper = styled.div`
  background-color: ${(props) =>
    props.sender === "bot" ? "#414141" : "#383838"};
  border-radius: 8px;
  padding: 8px;
  max-width: 70%;
  word-wrap: break-word;
`;

const ChatMessage = ({ type, content }) => {
  if (type === "text") {
    return <MessageWrapper>{content}</MessageWrapper>;
  }

  if (type === "image") {
    return <img src={content} alt="Captured" style={{ maxWidth: "100%" }} />;
  }

  return null;
};

export default ChatMessage;
