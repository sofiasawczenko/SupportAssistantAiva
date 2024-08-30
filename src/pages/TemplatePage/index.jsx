import {
  DownOutlined,
  PlayCircleOutlined,
  QuestionCircleOutlined,
  SaveOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Form, Input, Menu, message } from "antd";
import React, { useState } from "react";
import { defaultColor } from "../../App";
import {
  ButtonGroup,
  ButtonGroupContainer,
  CopyButton,
  CustomLabel,
  CustomTooltip,
  FormWrapper,
  GeneratePromptButton,
  PromptContainer,
  ResultTitle,
  Card as StyledCard,
  TitleContainer,
} from "./styles";

import "./styles.css";

const { TextArea } = Input;

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
    <Menu onClick={({ key }) => setTone(key)} style={defaultColor}>
      <Menu.Item key="Formal" style={{ color: "#44d4c6" }}>
        Formal
      </Menu.Item>
      <Menu.Item key="Informal" style={{ color: "#44d4c6" }}>
        Informal
      </Menu.Item>
      <Menu.Item key="Amigável" style={{ color: "#44d4c6" }}>
        Amigável
      </Menu.Item>
      <Menu.Item key="Profissional" style={{ color: "#44d4c6" }}>
        Profissional
      </Menu.Item>
    </Menu>
  );

  const formatMenu = (
    <Menu onClick={({ key }) => setFormat(key)}>
      <Menu.Item key="Texto">Texto</Menu.Item>
      <Menu.Item key="Lista">Lista</Menu.Item>
      <Menu.Item key="Parágrafo">Parágrafo</Menu.Item>
    </Menu>
  );

  return (
    <FormWrapper>
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
            <TextArea
              rows={2}
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Descreva a tarefa"
              style={{ ...defaultColor, borderColor: "#44d4c6" }}
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
            <TextArea
              rows={4}
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Detalhe o contexto"
              style={{ ...defaultColor, borderColor: "#44d4c6" }}
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
            <Dropdown overlay={toneMenu}>
              <Button>
                {tone} <DownOutlined />
              </Button>
            </Dropdown>
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
            <Dropdown overlay={formatMenu}>
              <Button>
                {format} <DownOutlined />
              </Button>
            </Dropdown>
          </Form.Item>

          <Form.Item>
            <GeneratePromptButton
              type="primary"
              icon={<PlayCircleOutlined />}
              onClick={handlePromptSubmit}
            >
              Gerar Prompt
            </GeneratePromptButton>
          </Form.Item>

          {outputResult && (
            <StyledCard
              title={
                <ResultTitle>
                  Resultado do Prompt{" "}
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

          <ButtonGroupContainer>
            <ButtonGroup type="default" onClick={handleSavePrompt}>
              <SaveOutlined />
              Salvar
            </ButtonGroup>

            <ButtonGroup type="primary" onClick={handlePostPrompt}>
              <ShareAltOutlined />
              Publicar
            </ButtonGroup>
          </ButtonGroupContainer>
        </Form>
      </PromptContainer>
    </FormWrapper>
  );
};

export default TemplatePage;
