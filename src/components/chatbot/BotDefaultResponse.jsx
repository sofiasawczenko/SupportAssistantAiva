import React, { useState } from 'react';
import { Select, Space, message } from 'antd';
import styled from 'styled-components';
import { CopyOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';

const ResponseWrapper = styled.div`
  color: #000000;
  font-size: 0.9rem;
  font-family: 'Fira Sans Condensed', sans-serif;
  margin-top: 10px;
  line-height: 1.6;
  text-align: justify;

  p {
    margin: 10px 0;
    color: #000000;
  }

  strong {
    font-weight: bold;
  }
`;

const TemplateResponse = styled.div`
  color: #000000;
  font-size: 0.9rem;
  font-family: 'Fira Sans Condensed', sans-serif;
  margin-top: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 15px;
  position: relative; 
  margin-bottom: 20px;
  padding-top: 35px;
`;

const SelectInstruction = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  background: #eff4fd;
  margin-bottom: 20px; 
  border: 1px solid #ddd;
`;

const CopyIcon = styled(CopyOutlined)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  cursor: pointer;
  color: #8b8b8b;
  background-color: #f1f1f1;
  margin-bottom: 30px; 

  &:hover {
    color: #0066CC;
  }
`;

const FeedbackWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const FeedbackIcon = styled.div`
  font-size: 16px;
  color: ${props => props.isActive ? '#0066CC' : '#8b8b8b'};
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    color: #0066CC;
  }
`;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const BotDefaultResponse = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleSelectChange = (value) => {
    setSelectedOption(value);
    handleChange(value);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      message.success('Texto copiado para a área de transferência!');
    }).catch((err) => {
      message.error('Falha ao copiar o texto.');
    });
  };

  const templateText = `
    Olá, [Nome]! Vou te passar um passo a passo para que você mesmo possa realizar a alteração no sistema SAP. Veja como proceder:
    1. Fala login no SAP.
    2. Na aba “Administração” e selecione “Acessos”
    3. Clique em “Usuário” e busque pelo seu nome.
    4. Selecione seu nome e vá para “Editar Usuário”.
    5. Em “Pertence aos grupos”, marque o grupo desejado.
    6. Na aba “Atribuições”, escolha o novo acesso.
    7. Salve as alterações em “Ação > Salvar Usuário”.
    Muito obrigado! Fico à disposição para qualquer dúvida.
  `;

  const handleLike = () => {
    setLiked(true);
    setDisliked(false);
  };

  const handleDislike = () => {
    setLiked(false);
    setDisliked(true);
  };

  return (
    <ResponseWrapper>
      <p><strong>Resposta</strong>:</p>
      <p>
        Para realizar a alteração de acesso no sistema, é preciso seguir alguns passos. Primeiro envie ao usuário a seguinte lista de
        informações que você precisará para alterar o acesso dele.
      </p>
      <p>1.<strong> Nome completo do usuário.</strong></p>
      <p>2.<strong> O tipo de alteração de acesso.</strong></p>
      <p>3.<strong> Se há chamado aberto com autorização dos responsáveis.</strong></p>
      <p>
        Para localidades Anápolis/Brainfarma, é preciso de documentação técnica.
      </p>
      
      <SelectInstruction>
        Selecione o template disponível no menu abaixo:
      </SelectInstruction>

      <Space wrap>
        <Select
          defaultValue="Selecione um Template"
          style={{ width: 300 }}
          onChange={handleSelectChange}
          options={[
            { value: 'Bloquear Acesso', label: 'Bloquear Acesso' },
            { value: 'Remover Acesso', label: 'Remover Acesso' },
            { value: 'Adicionar a grupo', label: 'Adicionar a grupo' },
          ]}
        />
      </Space>

      {selectedOption === 'Adicionar a grupo' && (
        <TemplateResponse>
          <CopyIcon onClick={() => copyToClipboard(templateText)} />
          <p>Olá, [Nome]! Vou te passar um passo a passo para que você mesmo possa realizar a alteração no sistema SAP. Veja como proceder:</p>
          <p>
            1.<strong> Fala login no SAP.</strong>
          </p>
          <p>
            2.<strong> Na aba “Administração” e selecione “Acessos”</strong>
          </p>
          <p>
            3.<strong> Clique em “Usuário” e busque pelo seu nome.</strong>
          </p>
          <p>
            4.<strong> Selecione seu nome e vá para “Editar Usuário”.</strong>
          </p>
          <p>
            5.<strong> Em “Pertence aos grupos”, marque o grupo desejado.</strong>
          </p>
          <p>
            6.<strong> Na aba “Atribuições”, escolha o novo acesso.</strong>
          </p>
          <p>
            7.<strong> Salve as alterações em “Ação > Salvar Usuário”.</strong>
          </p>
          <p>
            Muito obrigado! Fico à disposição para qualquer dúvida.
          </p>

          <FeedbackWrapper>
            <FeedbackIcon
              isActive={liked}
              onClick={handleLike}
            >
              <LikeOutlined />
            </FeedbackIcon>
            <FeedbackIcon
              isActive={disliked}
              onClick={handleDislike}
            >
              <DislikeOutlined />
            </FeedbackIcon>
          </FeedbackWrapper>
        </TemplateResponse>
      )}
    </ResponseWrapper>
  );
};

export default BotDefaultResponse;
