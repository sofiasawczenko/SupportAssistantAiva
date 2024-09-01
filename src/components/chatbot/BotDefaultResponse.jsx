import { CopyOutlined, DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { Select, Space, message } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const ResponseWrapper = styled.div`
  font-size: 0.9rem;
  font-family: "Fira Sans Condensed", sans-serif;
  text-align: justify;
  background-color: #2b2b2b;
  color: #e7e7e7;
  width: 100%;
`;

const AnswerStyle = styled.div`
  color: #e7e7e7;
  background-color: #2b2b2b;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: "Fira Sans Condensed", sans-serif;
  line-height: 1.6;
`;

const TemplateResponse = styled.div`
  color: #161616;
  font-size: 0.9rem;
  font-family: "Fira Sans Condensed", sans-serif;
  margin-top: 20px;
  background-color: #d8d8d8;
  border-radius: 5px;
  border: 1px solid #afafaf;
  padding: 15px;
  position: relative;
  padding-top: 35px;
`;

const TemplateText = styled.p`
  color: #000;
`;

const SelectInstruction = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #0a0a0a;
  margin-top: 20px;
  padding: 0.5rem;
  border-radius: 4px;
  background: #0d9e90;
  margin-bottom: 20px;
  border: 1px solid #414141;
`;

const CopyIcon = styled(CopyOutlined)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  cursor: pointer;
  color: #414141;
  background-color: #f1f1f1;

  &:hover {
    color: #0066cc;
  }
`;

const FeedbackWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FeedbackIcon = styled.div`
  font-size: 16px;
  color: ${(props) => (props.isActive ? "#0d9e90" : "#8b8b8b")};
  cursor: pointer;

  &:hover {
    color: #44d4c6;
  }
`;

const BotDefaultResponse = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() =>
        message.success("Texto copiado para a área de transferência!")
      )
      .catch(() => message.error("Falha ao copiar o texto."));
  };

  const templateText = `
    Olá, [Nome]! Vou te passar um passo a passo para que você mesmo possa realizar a alteração no sistema SAP. Veja como proceder:
    1. Faça login no SAP.
    2. Na aba “Administração” e selecione “Acessos”.
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
      <AnswerStyle>
        <p>
          <strong>Resposta:</strong>
        </p>
        <p>
          Para realizar a alteração de acesso no sistema, é preciso seguir
          alguns passos. Primeiro envie ao usuário a seguinte lista de
          informações que você precisará para alterar o acesso dele.
        </p>
        <p>
          <strong>1. Nome completo do usuário.</strong>
        </p>
        <p>
          <strong>2. O tipo de alteração de acesso.</strong>
        </p>
        <p>
          <strong>
            3. Se há chamado aberto com autorização dos responsáveis.
          </strong>
        </p>
        <p>
          Para localidades Anápolis/Brainfarma, é preciso de documentação
          técnica.
        </p>
      </AnswerStyle>

      <SelectInstruction>
        Selecione o template disponível no menu abaixo:
      </SelectInstruction>

      <Space wrap>
        <Select
          defaultValue="Selecione um Template"
          style={{ width: 300 }}
          onChange={handleSelectChange}
          options={[
            { value: "Bloquear Acesso", label: "Bloquear Acesso" },
            { value: "Remover Acesso", label: "Remover Acesso" },
            { value: "Adicionar a grupo", label: "Adicionar a grupo" },
          ]}
        />
      </Space>

      {selectedOption === "Adicionar a grupo" && (
        <TemplateResponse>
          <CopyIcon onClick={() => copyToClipboard(templateText)} />
          <TemplateText>
            Olá, [Nome]! Vou te passar um passo a passo para que você mesmo
            possa realizar a alteração no sistema SAP. Veja como proceder:
          </TemplateText>
          <TemplateText>
            <strong>1. Faça login no SAP.</strong>
          </TemplateText>
          <TemplateText>
            <strong>2. Na aba “Administração” e selecione “Acessos”.</strong>
          </TemplateText>
          <TemplateText>
            <strong>3. Clique em “Usuário” e busque pelo seu nome.</strong>
          </TemplateText>
          <TemplateText>
            <strong>4. Selecione seu nome e vá para “Editar Usuário”.</strong>
          </TemplateText>
          <TemplateText>
            <strong>
              5. Em “Pertence aos grupos”, marque o grupo desejado.
            </strong>
          </TemplateText>
          <TemplateText>
            <strong>6. Na aba “Atribuições”, escolha o novo acesso.</strong>
          </TemplateText>
          <TemplateText>
            <strong>
              7. Salve as alterações em “Ação {">"} Salvar Usuário”.
            </strong>
          </TemplateText>
          <TemplateText>
            Muito obrigado! Fico à disposição para qualquer dúvida.
          </TemplateText>

          <FeedbackWrapper>
            <FeedbackIcon isActive={liked} onClick={handleLike}>
              <LikeOutlined />
            </FeedbackIcon>
            <FeedbackIcon isActive={disliked} onClick={handleDislike}>
              <DislikeOutlined />
            </FeedbackIcon>
          </FeedbackWrapper>
        </TemplateResponse>
      )}
    </ResponseWrapper>
  );
};

export default BotDefaultResponse;
