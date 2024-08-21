import styled from 'styled-components';
import { Modal, Button } from 'antd';

// Estilo personalizado para o Modal
export const CustomModal = styled(Modal)`
  .ant-modal-header {
    color: #333;  // Texto escuro no cabeçalho
    justify-content: center;  // Centraliza o título horizontalmente
    align-items: center;  // Alinha o título verticalmente no centro do cabeçalho
    margin-left: 30%;
    font-family: "Fira Sans Condensed", sans-serif;
    font-weight: 400;
  }
  
  .ant-modal-title {
    font-size: 1.2rem;
    color: #333;  // Cor do título
  }
  
  .ant-modal-body {
    background-color: #F0F0F0;  // Fundo cinza muito claro para o corpo
    color: #333;  // Texto escuro no corpo
  }
  
  .ant-modal-footer {
    background-color: #B6B6B6;  // Fundo cinza claro para o rodapé
    border-top: 1px solid #888;  // Borda sutil no rodapé
    color: #333;  // Texto escuro no rodapé
  }
`;

// Estilo personalizado para o container do prompt
export const PromptContainer = styled.div`
  padding: 2rem;
  font-size: 1rem;
  color: #333;  // Texto escuro
  
  h1 {
    font-size: 1.5rem;
    color: #44D4C6;  // Cor verde para o título
  }
  
  p {
    font-size: 1rem;
  }
`;

// Estilo personalizado para os botões
export const CustomButton = styled(Button)`
  background-color: #44D4C6;  // Cor verde para o fundo do botão
  border-color: #44D4C6;  // Cor verde para a borda do botão
  color: #fff;  // Texto branco no botão

  &:hover, &:focus {
    background-color: #39b6a6;  // Cor verde mais escura ao passar o mouse
    border-color: #39b6a6;  // Cor verde mais escura para a borda ao passar o mouse
    color: #fff;  // Texto branco ao passar o mouse
  }
`;
