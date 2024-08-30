import React, { useState, useEffect } from 'react';
import { UploadOutlined, LikeOutlined, DislikeOutlined, SolutionOutlined } from '@ant-design/icons';
import { Upload, message, Input, Switch, Modal, List, Button } from 'antd';
import {
  StyledTabs,
  StyledButton,
  ChatbotWrapper,
  ChatWindow,
  ChatInput,
  ChatInputFieldPlusOptions,
  CustomTextArea,
  ChatInputButton,
  SwitchContainer,
  ReactionButtons,
  ReactionIcon,
  HoverButtonUpload,
  HoverButtonSend
} from './styles';
import BotDefaultResponse from './BotDefaultResponse';
import TextSelectionTool from '../TextSelectionTool';

const { TextArea } = Input;

const uploadProps = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

const Chatbot = ({ initialMessage }) => {
  const [messages, setMessages] = useState([
    { text: 'Olá! Como posso ajudar?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [historyEnabled, setHistoryEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const savedTemplates = [
    'Template remoção de usuário',
    'Template alteração de conta',
    'Template como desativar SAP'
  ];

  const communityPrompts = [
    'Usuário',
    'Prompt 2',
    'Prompt 3'
  ];

  useEffect(() => {
    if (initialMessage) {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: initialMessage, sender: 'user' }
      ]);
    }
  }, [initialMessage]);

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { text: inputValue, sender: 'user' },
        { text: 'Essa é a resposta padrão do bot.', sender: 'bot' }
      ]);
      setInputValue('');
      showWarningMessage('Já existe um Template respondendo a essa pergunta!');
    }
  };

  const showWarningMessage = (content) => {
    messageApi.open({
      type: 'warning',
      content
    });
  };

  const handleCaptureImage = (imageData) => {
    setMessages([...messages, { type: 'image', content: imageData }]);
  };

  const handleSendText = (text) => {
    setMessages([
      ...messages,
      { text, sender: 'user' },
      { text: 'Essa é a resposta padrão do bot.', sender: 'bot' }
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
              {msg.sender === 'bot' ? (
                <div>
                  {msg.text === 'Olá! Como posso ajudar?' ? (
                    <p style={{ fontFamily: 'Fira Sans Condensed, sans-serif', marginTop: '-20px', marginBottom: '2px', fontSize: '17px', color: 'white' }}>
                      {msg.text}
                    </p>
                  ) : msg.text === 'Essa é a resposta padrão do bot.' ? (
                    <BotDefaultResponse />
                  ) : (
                    <>
                      <p>{msg.text}</p>
                      <ReactionButtons>
                        <ReactionIcon><LikeOutlined /></ReactionIcon>
                        <ReactionIcon><DislikeOutlined /></ReactionIcon>
                      </ReactionButtons>
                    </>
                  )}
                </div>
              ) : (
                <p>{msg.text}</p>
              )}
            </div>
          ))}
        </ChatWindow>

        <ChatInput>
          <ChatInputFieldPlusOptions>
            <CustomTextArea
              placeholder="Digite sua mensagem..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onPressEnter={sendMessage}
              rows={4}
              style={{ background: '#232323', color: '#CDCDCD' }}
            />
            <SolutionOutlined
              style={{ position: 'fixed', color: '#1FB8A9', fontSize: '20px', cursor: 'pointer', marginLeft: '21rem', marginTop: '4rem' }}
              onClick={showModal}
            />
            <ChatInputButton>
              <Upload {...uploadProps}>
                <HoverButtonUpload icon={<UploadOutlined />}>Upload</HoverButtonUpload>
              </Upload>
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
              </Button>
            ]}
          >
            <StyledTabs defaultActiveKey="1">
              <StyledTabs.TabPane tab="Meus Templates" key="1">
                <List
                  bordered
                  dataSource={savedTemplates}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
              </StyledTabs.TabPane>
              <StyledTabs.TabPane tab="Prompts da Comunidade" key="2">
                <StyledTabs defaultActiveKey="bug">
                  <StyledTabs.TabPane tab="Bug" key="bug">
                    <List
                      bordered
                      dataSource={['Template Bug página fora do ar', 'Template Bug para enviar pedidos']}
                      renderItem={item => <List.Item>{item}</List.Item>}
                    />
                  </StyledTabs.TabPane>
                  <StyledTabs.TabPane tab="Avisos" key="avisos">
                    <List
                      bordered
                      dataSource={['Template Aviso de sistema fora do ar', 'Template Aviso tempo de espera']}
                      renderItem={item => <List.Item>{item}</List.Item>}
                    />
                  </StyledTabs.TabPane>
                  <StyledTabs.TabPane tab="Usuário" key="usuario">
                    <List
                      bordered
                      dataSource={['Template Excluir Usuário', 'Template Usuário inexistente']}
                      renderItem={item => <List.Item>{item}</List.Item>}
                    />
                  </StyledTabs.TabPane>
                  <StyledTabs.TabPane tab="Acesso" key="acesso">
                    <List
                      bordered
                      dataSource={['Template Acesso negado', 'Template Troca de acesso SAP']}
                      renderItem={item => <List.Item>{item}</List.Item>}
                    />
                  </StyledTabs.TabPane>
                </StyledTabs>
              </StyledTabs.TabPane>
            </StyledTabs>
          </Modal>

          <SwitchContainer>
            <Switch
              checked={historyEnabled}
              onChange={handleSwitchChange}
              size="small"
              style={{ marginRight: '8px', backgroundColor: historyEnabled ? '#1FB8A9' : '#b3b3b3' }}
            />
            <div style={{ color: 'white' }}>
              {historyEnabled ? 'Histórico Ativado' : 'Histórico Desativado'}
            </div>
          </SwitchContainer>
        </ChatInput>
      </ChatbotWrapper>
    </>
  );
};

export default Chatbot;
