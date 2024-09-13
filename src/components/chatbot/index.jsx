import {
  DislikeOutlined,
  LikeOutlined,
  SolutionOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Input, List, message, Modal, Switch, Upload } from "antd";
import React, { useState } from "react";
import TextSelectionTool from "../TextSelectionTool";
import BotDefaultResponse from "./BotDefaultResponse";
import {
  ChatbotWrapper,
  ChatInput,
  ChatInputButton,
  ChatInputFieldPlusOptions,
  ChatWindow,
  CustomTextArea,
  HoverButtonSend,
  HoverButtonUpload,
  ReactionButtons,
  ReactionIcon,
  StyledButton,
  StyledTabs,
  SwitchContainer,
} from "./styles";

const { TextArea } = Input;

const uploadProps = {
  name: "file",
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Chatbot = ({ initialMessage }) => {
  const [messages, setMessages] = useState([
    { text: "Olá! Como posso ajudar?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [historyEnabled, setHistoryEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const savedTemplates = [
    "Template remoção de usuário",
    "Template alteração de conta",
    "Template como desativar SAP",
  ];

  const communityPrompts = ["Usuário", "Prompt 2", "Prompt 3"];

  // useEffect(() => {
  //   if (initialMessage) {
  //     setMessages(prevMessages => [
  //       ...prevMessages,
  //       { text: initialMessage, sender: 'user' }
  //     ]);
  //   }
  // }, [initialMessage]);

  const sendMessage = async () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { text: inputValue, sender: "user" },
        { text: "Essa é a resposta padrão do bot.", sender: "bot" },
      ]);
      setInputValue("");
    }
    // const { data } = await axios.post(
    //   "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyD0UKH66016KKY1-BORlH0Pj7W9M695MK0",
    //   {
    //     contents: [
    //       {
    //         parts: [
    //           {
    //             text: inputValue,
    //           },
    //         ],
    //       },
    //     ],
    //   }
    // );
    // const [message] = data.candidates;
    // const [text] = message.content.parts;
    // setMessages([
    //   ...messages,
    //   { text: inputValue, sender: "user" },
    //   { text: "Essa é a resposta padrão do bot.", sender: "bot" },
    //   { text: text.text, sender: "bot" },
    // ]);
    // console.log(text.text);
  };

  const handleCaptureImage = (imageData) => {
    setMessages([...messages, { type: "image", content: imageData }]);
  };

  const handleSendText = (text) => {
    setMessages([
      ...messages,
      { text, sender: "user" },
      { text: "Essa é a resposta padrão do bot.", sender: "bot" },
    ]);
  };

  const handleSwitchChange = (checked) => {
    setHistoryEnabled(checked);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleModalOk = () => {
    setModalVisible(false);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleTextSelect = (text) => {
    handleSendText(text);
  };

  return (
    <>
      {contextHolder}
      <ChatbotWrapper>
        <TextSelectionTool onTextSelect={handleTextSelect} />
        <ChatWindow>
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender}>
              {msg.sender === "bot" ? (
                <div>
                  {msg.text === "Olá! Como posso ajudar?" ? (
                    <p
                      style={{
                        fontFamily: "Fira Sans Condensed, sans-serif",
                        fontSize: "17px",
                        color: "white",
                        padding: "0.2rem 0.5rem",
                      }}
                    >
                      {msg.text}
                    </p>
                  ) : msg.text === "Essa é a resposta padrão do bot." ? (
                    <BotDefaultResponse />
                  ) : (
                    <>
                      <p>{msg.text}</p>
                      <ReactionButtons>
                        <ReactionIcon>
                          <LikeOutlined />
                        </ReactionIcon>
                        <ReactionIcon>
                          <DislikeOutlined />
                        </ReactionIcon>
                      </ReactionButtons>
                    </>
                  )}
                </div>
              ) : (
                <p style={{ padding: "0.2rem 0.5rem" }}>{msg.text}</p>
              )}
            </div>
          ))}
        </ChatWindow>

        <div style={{ alignSelf: "end", width: "100%" }}>
          <SwitchContainer>
            <Switch
              checked={historyEnabled}
              onChange={handleSwitchChange}
              size="small"
              style={{
                backgroundColor: historyEnabled ? "#1FB8A9" : "#b3b3b3",
              }}
            />
            <div style={{ color: "white" }}>
              {historyEnabled ? "Histórico Ativado" : "Histórico Desativado"}
            </div>
          </SwitchContainer>

          <ChatInput>
            <ChatInputFieldPlusOptions>
              <CustomTextArea
                placeholder="Digite sua mensagem..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onPressEnter={sendMessage}
                rows={4}
                style={{ background: "#232323", color: "#CDCDCD" }}
              />

              <ChatInputButton>
                <Upload {...uploadProps}>
                  <HoverButtonUpload icon={<UploadOutlined />}>
                    Upload
                  </HoverButtonUpload>
                </Upload>
                <SolutionOutlined
                  style={{
                    color: "#1FB8A9",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                  onClick={showModal}
                />
                <HoverButtonSend onClick={sendMessage}>Enviar</HoverButtonSend>
              </ChatInputButton>
            </ChatInputFieldPlusOptions>

            <Modal
              title="Soluções"
              visible={modalVisible}
              onOk={handleModalOk}
              onCancel={handleModalCancel}
              width={600}
              footer={[
                <StyledButton key="ok" type="primary" onClick={handleModalOk}>
                  OK
                </StyledButton>,
                <Button key="cancel" onClick={handleModalCancel}>
                  Cancelar
                </Button>,
              ]}
            >
              <StyledTabs defaultActiveKey="1">
                <StyledTabs.TabPane tab="Meus Templates" key="1">
                  <List
                    bordered
                    dataSource={savedTemplates}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </StyledTabs.TabPane>
                <StyledTabs.TabPane tab="Prompts da Comunidade" key="2">
                  <StyledTabs defaultActiveKey="bug">
                    <StyledTabs.TabPane tab="Bug" key="bug">
                      <List
                        bordered
                        dataSource={[
                          "Template Bug página fora do ar",
                          "Template Bug para enviar pedidos",
                        ]}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                      />
                    </StyledTabs.TabPane>
                    <StyledTabs.TabPane tab="Avisos" key="avisos">
                      <List
                        bordered
                        dataSource={[
                          "Template Aviso de sistema fora do ar",
                          "Template Aviso tempo de espera",
                        ]}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                      />
                    </StyledTabs.TabPane>
                    <StyledTabs.TabPane tab="Usuário" key="usuario">
                      <List
                        bordered
                        dataSource={[
                          "Template Excluir Usuário",
                          "Template Usuário inexistente",
                        ]}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                      />
                    </StyledTabs.TabPane>
                    <StyledTabs.TabPane tab="Acesso" key="acesso">
                      <List
                        bordered
                        dataSource={[
                          "Template Acesso negado",
                          "Template Troca de acesso SAP",
                        ]}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                      />
                    </StyledTabs.TabPane>
                  </StyledTabs>
                </StyledTabs.TabPane>
              </StyledTabs>
            </Modal>
          </ChatInput>
        </div>
      </ChatbotWrapper>
    </>
  );
};

export default Chatbot;
