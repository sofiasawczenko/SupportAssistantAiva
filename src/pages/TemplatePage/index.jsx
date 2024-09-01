// src/components/TemplatePage/index.js
import {
  DownOutlined,
  PlayCircleOutlined,
  QuestionCircleOutlined,
  SaveOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Button, Form, Menu, message } from "antd";
import React, { useState } from "react";
import {
  CopyButton,
  CustomButton,
  CustomDropdown,
  CustomLabel,
  CustomTooltip,
  HoverButton,
  PromptContainer,
  ResultTitle,
  StyledCard,
  StyledTextArea,
  TitleContainer,
} from "./styles";

const dropdownMenuStyle = {
  backgroundColor: "#CDCDCD",
  color: "#fff",
};

const itemMenuStyle = {
  color: "black",
};

const dropdownTitleStyle = {
  backgroundColor: "#131313",
  color: "#fff",
  border: "none",
  display: "flex",
  alignItems: "center",
};

const dropdownTitleHoverStyle = {
  backgroundColor: "#333",
};

const TemplatePage = () => {
  const [task, setTask] = useState("");
  const [context, setContext] = useState("");
  const [tone, setTone] = useState("Selecione um Tom");
  const [format, setFormat] = useState("Selecione um Formato");
  const [outputResult, setOutputResult] = useState("");

  const handlePromptSubmit = () => {
    if (
      !task ||
      !context ||
      tone === "Selecione um Tom" ||
      format === "Selecione um Formato"
    ) {
      message.error("Por favor, preencha todos os campos.");
      return;
    }

    setOutputResult(
      `Prompt gerado com sucesso! ${task}. ${context}. Tom: ${tone}. Formato: ${format}.`
    );
    setTask("");
    setContext("");
    setTone("Selecione um Tom");
    setFormat("Selecione um Formato");
  };

  const handleSavePrompt = () => {
    message.success("Prompt salvo na biblioteca.");
  };

  const handlePostPrompt = () => {
    message.success("Prompt postado na comunidade.");
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(outputResult);
    message.success("Texto copiado para a área de transferência!");
  };

  const toneMenu = (
    <Menu onClick={({ key }) => setTone(key)} style={dropdownMenuStyle}>
      <Menu.Item key="Formal" style={itemMenuStyle}>
        Formal
      </Menu.Item>
      <Menu.Item key="Informal" style={itemMenuStyle}>
        Informal
      </Menu.Item>
      <Menu.Item key="Amigável" style={itemMenuStyle}>
        Amigável
      </Menu.Item>
      <Menu.Item key="Profissional" style={itemMenuStyle}>
        Profissional
      </Menu.Item>
    </Menu>
  );

  const formatMenu = (
    <Menu onClick={({ key }) => setFormat(key)} style={dropdownMenuStyle}>
      <Menu.Item key="Texto" style={itemMenuStyle}>
        Texto
      </Menu.Item>
      <Menu.Item key="Lista" style={itemMenuStyle}>
        Lista
      </Menu.Item>
      <Menu.Item key="Parágrafo" style={itemMenuStyle}>
        Parágrafo
      </Menu.Item>
    </Menu>
  );

  return (
    <PromptContainer>
      <TitleContainer>
        Ferramenta para gerar respostas precisas para problemas específicos.
        Após a criação, você pode salvar as respostas para usar novamente ou
        transformá-las em um Prompt Público.
      </TitleContainer>
      <Form layout="vertical">
        <Form.Item
          label={
            <CustomLabel>
              Tarefa
              <CustomTooltip title="Descreva a ação que você deseja que a IA execute.">
                <QuestionCircleOutlined />
              </CustomTooltip>
            </CustomLabel>
          }
        >
          <StyledTextArea
            rows={2}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Descreva a tarefa"
          />
        </Form.Item>

        <Form.Item
          label={
            <CustomLabel>
              Contexto
              <CustomTooltip title="Dê informações adicionais sobre a situação, o público ou o cenário em que a tarefa está inserida. Isso ajuda a IA a personalizar a resposta.">
                <QuestionCircleOutlined />
              </CustomTooltip>
            </CustomLabel>
          }
        >
          <StyledTextArea
            rows={4}
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Detalhe o contexto"
          />
        </Form.Item>

        <Form.Item
          label={
            <CustomLabel>
              Tom
              <CustomTooltip title="O tom se refere ao estilo que a resposta deve ter">
                <QuestionCircleOutlined />
              </CustomTooltip>
            </CustomLabel>
          }
        >
          <CustomDropdown
            overlay={toneMenu}
            overlayStyle={dropdownMenuStyle}
            trigger={["click"]}
          >
            <CustomButton style={dropdownTitleStyle}>
              {tone} <DownOutlined />
            </CustomButton>
          </CustomDropdown>
        </Form.Item>

        <Form.Item
          label={
            <CustomLabel>
              Formato
              <CustomTooltip title="Como a resposta deve ser estruturada">
                <QuestionCircleOutlined />
              </CustomTooltip>
            </CustomLabel>
          }
        >
          <CustomDropdown
            overlay={formatMenu}
            overlayStyle={dropdownMenuStyle}
            trigger={["click"]}
          >
            <CustomButton style={dropdownTitleStyle}>
              {format} <DownOutlined />
            </CustomButton>
          </CustomDropdown>
        </Form.Item>

        <Form.Item>
          <HoverButton
            type="Dashed"
            icon={<PlayCircleOutlined />}
            onClick={handlePromptSubmit}
          >
            Gerar Prompt
          </HoverButton>
        </Form.Item>

        {outputResult && (
          <StyledCard
            title={
              <ResultTitle>
                Resultado do Prompt
                <CopyButton onClick={handleCopyToClipboard} />
              </ResultTitle>
            }
            style={{
              backgroundColor: "#eeeeee67",
              color: "#060606",
              fontFamily: "Fira Sans Condensed",
              fontSize: "14px",
            }}
          >
            {outputResult}
          </StyledCard>
        )}

        <Form.Item>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button
              type="Dashed"
              icon={<SaveOutlined />}
              onClick={handleSavePrompt}
              style={{
                backgroundColor: "#EAEAEA",
                borderColor: "#EAEAEA",
                color: "black",
              }}
            >
              Salvar
            </Button>
            <HoverButton
              type="Dashed"
              icon={<ShareAltOutlined />}
              onClick={handlePostPrompt}
            >
              Publicar
            </HoverButton>
          </div>
        </Form.Item>
      </Form>
    </PromptContainer>
  );
};

export default TemplatePage;
