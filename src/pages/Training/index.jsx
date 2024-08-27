import React, { useState } from 'react';
import { Container, TitleContainer, StyledText, StyledSubText } from './styles';
import { message, Card, Space, Form, Input, Upload, Button, Checkbox, Divider, Tooltip } from 'antd';
import { UploadOutlined, QuestionCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const CustomTooltip = styled(Tooltip)`
  .ant-tooltip-inner {
    font-size: 10px; 
  }
`;

const TrainingForm = () => {
  const [form] = Form.useForm();
  const [chatMessage, setChatMessage] = useState('');
  const [response, setResponse] = useState('');
  const [enableFeedback, setEnableFeedback] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false); // Add state for loading

  const handleChatSubmit = () => {
    if (!chatMessage) {
      message.error('Digite uma mensagem para testar o modelo.');
      return;
    }
    setResponse(`Resposta: "${chatMessage}"`);
    setChatMessage('');
  };

  const handleSendModel = () => {
    setLoading(true); 
    form
      .validateFields()
      .then((values) => {
        console.log('Model sent with input:', values.trainingName, 'File uploaded:', values.upload, 'Enable feedback:', enableFeedback);
        messageApi.success('Base de Dados atualizada com sucesso!');
      })
      .catch((errorInfo) => {
        console.error('Failed:', errorInfo);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const uploadProps = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    beforeUpload: (file) => {
      form.setFieldsValue({ upload: file });
      return false; // Prevents automatic upload
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} enviado com sucesso!`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} falha no upload.`);
      }
    },
  };

  return (
    <Container>
      {contextHolder}
      <TitleContainer>
        A base de conhecimento dos processos internos de uma empresa é dinâmica. Por isso, treine a IA para aprender continuamente com novas soluções e insights extraídos de uma base de dados atualizada.
      </TitleContainer>

      <Form
        form={form}
        layout="vertical"
        initialValues={{
          requiredMarkValue: 'optional',
        }}
      >
        <Form.Item
          label={
            <StyledText strong>
              Nome do Treinamento 
              <CustomTooltip title="Insira o nome do treinamento.">
                <QuestionCircleOutlined style={{ marginLeft: 8, color: 'gray' }} />
              </CustomTooltip>
            </StyledText>
          }
          name="trainingName"
          rules={[{ required: true, message: 'Por favor, insira o nome do treinamento' }]}
        >
          <Input placeholder="Digite o nome do treinamento" />
        </Form.Item>

        <Form.Item
          label={
            <StyledText strong>
              Descrição do Treinamento
            </StyledText>
          }
          name="trainingDescription"
          rules={[{ required: true, message: 'Por favor, insira a descrição do treinamento' }]}
        >
          <Input.TextArea rows={4} placeholder="Digite a descrição do treinamento" />
        </Form.Item>

        <Divider />

        <Form.Item
          label={
            <StyledText strong>
              Enviar Arquivo 
              <CustomTooltip title="Aceita .log, .txt, .png, .jpg de até 10MB para logs e 5MB para capturas de tela.">
                <QuestionCircleOutlined style={{ marginLeft: 8, color: 'gray' }} />
              </CustomTooltip>
            </StyledText>
          }
          name="upload"
          rules={[{ required: true, message: 'Por favor, envie um arquivo' }]}
        >
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Carregar Dados</Button>
          </Upload>
        </Form.Item>

        <div style={{ margin: '16px 0' }}>
          <p><StyledText>Instruções para Envio:</StyledText></p>
          <ul>
            <StyledSubText>
              <li><strong>Arquivo:</strong> Faça o upload do arquivo de logs do sistema gerado durante a ocorrência do erro ou capturas de tela que recriam o erro. Certifique-se de que o arquivo contenha informações detalhadas sobre a falha.</li>
            </StyledSubText>
          </ul>
        </div>

        <Form.Item>
          <Button type="primary" onClick={handleSendModel} loading={loading}><PlayCircleOutlined />
            Executar Treinamento
          </Button>
        </Form.Item>
        <Divider />

        <Form.Item
          label={
            <StyledText strong>
              Testar Modelo 
              <CustomTooltip title="Digite uma mensagem para testar o modelo de IA.">
                <QuestionCircleOutlined style={{ marginLeft: 8, color: 'gray' }} />
              </CustomTooltip>
            </StyledText>
          }
          name="chatMessage"
        >
          <Input.TextArea
            rows={6}
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            placeholder="Digite sua mensagem para o modelo de IA"
          />
        </Form.Item>

        {response && (
          <Space direction="vertical" style={{ width: '100%' }}>
            <Card title="Resposta do Modelo" style={{ marginBottom: '1.5rem', fontFamily: "Fira Sans Condensed", backgroundColor: '#e8e8e867', color: '#060606' }}>
              <StyledText>{response}</StyledText>
            </Card>
          </Space>
        )}

        <Form.Item>
          <Button type='default' onClick={handleChatSubmit}>
            Avaliar
          </Button>
        </Form.Item>

        <Divider />

        <Form.Item>
          <Checkbox checked={enableFeedback} onChange={() => setEnableFeedback(!enableFeedback)}>
            <StyledText>Habilitar Feedback dos Usuários</StyledText>
          </Checkbox>
        </Form.Item>
        
        
        <Form.Item>
          <Button type="primary" onClick={handleSendModel}><PlayCircleOutlined />
            Atualizar Base de Dados da AIVA
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default TrainingForm;
