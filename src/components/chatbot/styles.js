import styled from 'styled-components';

export const ChatBox = styled.div`
  display: none;
  background: #0F1216;
  position: fixed;
  right: 19%;
  bottom: 25%; /* Ajuste a posição inferior se necessário */
  height: 60%;
  width: 27rem;
  max-width: 85vw;
  max-height: 80vh; /* Ajuste a altura máxima conforme necessário */
  border-radius: 5px;
  /*box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.6);  Opcional: adicionar sombra para melhor visibilidade */
  &.active {
    display: block;
  }
`;

export const ChatBoxToggle = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  font-size: 18px;
  color: #fff; /* Ajuste a cor do ícone de fechar, se necessário */
`;

export const ChatBoxBody = styled.div`
  height: calc(100% - 60px); /* Ajuste a altura para ocupar o espaço disponível dentro do ChatBox */
  overflow-y: auto; /* Permite rolar o conteúdo se necessário */
  display: flex;
  flex-direction: column;
`;

export const ChatLogs = styled.div`
  padding: 15px;
  flex: 1; /* Permite que o ChatLogs ocupe todo o espaço disponível */
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const ChatMsg = styled.div`
  display: flex;
  margin-bottom: 10px;
  &.self {
    flex-direction: row-reverse;
    text-align: right;
  }
`;

export const CmMsgText = styled.div`
  background: ${({ type }) => (type === 'self' ? '#171A1F' : 'none')}; /* Background gray for self messages */
  padding: 10px 15px;
  color: white;
  max-width: 75%;
  border-radius: 10px;
  font-size: 14px;
  font-family: "fire sans", monospace;
  font-weight: 400;
  text-align: justify;
`;

export const ChatInput = styled.div`
  background-color: #181C23;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  position: fixed;
  right: 14%;
  bottom: 3rem;
  width: 25rem;
  height: 6rem;
  margin-left: 1.5rem;
  border: 0.1rem solid #2A2D34;

  form {
    display: flex;
    align-items: center;
    position: relative;
  }

  input {
    flex: 1;
    border: none; /* Remove a borda do campo de entrada */
    padding: 10px; /* Ajuste o padding para garantir que o texto não esteja cortado */
    background: #181C23;
    color: white;
    outline: none; /* Remove a borda do foco */
    
    &::placeholder {
      color: #666; /* Ajuste a cor do texto do placeholder se necessário */
    }
  }
`;

export const ChatSubmit = styled.button`
  position: fixed;
  bottom: 3.5rem;
  right: 6rem;
  background: transparent;
  border: none;
  color: transparent; /* Hides the button text */
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  img {
    width: 20px; /* Set the width of the image to 5px */
    height: auto; /* Maintain aspect ratio */
  }
`;

const ScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const SelectionBox = styled.div`
  position: absolute;
  border: 2px solid #ffffff;
  background-color: rgba(255, 255, 255, 0.3);
  pointer-events: none;
  display: ${props => (props.visible ? 'block' : 'none')};
`;