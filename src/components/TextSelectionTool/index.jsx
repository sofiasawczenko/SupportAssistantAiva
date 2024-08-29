import { Button } from "antd";
import React, { useEffect, useState } from "react";

const TextSelectionTool = ({ onTextSelect }) => {
  const [selectedText, setSelectedText] = useState("");
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [showButton, setShowButton] = useState(false);

  const handleMouseUp = () => {
    const selection = window.getSelection();
    const text = selection.toString();
    if (text) {
      setSelectedText(text);
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setButtonPosition({
        top: rect.top + window.scrollY - 40, // Posiciona acima da seleção (ajuste conforme necessário)
        left: rect.left + window.scrollX + rect.width / 2, // Centraliza o botão horizontalmente em relação ao texto
      });
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleSendToChatbot = () => {
    onTextSelect(selectedText);
    setSelectedText("");
    setShowButton(false);
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <>
      {showButton && (
        <Button
          onClick={handleSendToChatbot}
          style={{
            borderColor: "#44d4c6",
            color: "#44d4c6",
            backgroundColor: "#101216",
            position: "fixed",
            top: `${buttonPosition.top}px`,
            left: `${buttonPosition.left}px`,
            transform: "translateX(-50%)", // Centraliza o botão horizontalmente
            zIndex: 1000, // Garante que o botão fique acima de outros elementos
          }}
        >
          Enviar Texto ao Chatbot
        </Button>
      )}
    </>
  );
};

export default TextSelectionTool;
