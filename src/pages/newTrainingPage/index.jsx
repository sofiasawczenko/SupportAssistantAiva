import React, { useState } from 'react';
import { Modal, Input, Upload, message, Space, Card, Form } from 'antd';
import { UploadOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { TrainingContainer, CustomModal, CustomButton } from './styles';

const { TextArea } = Input;

const NewTrainingPage = ({ visible, onClose }) => {
  const [fileList, setFileList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleFileChange = ({ fileList }) => setFileList(fileList);

  const handleUpload = () => {
    if (fileList.length === 0) {
      message.error('Por favor, faça o upload de um arquivo.');
      return;
    }
    message.success('Arquivo enviado com sucesso!');
  };

  const handleChatSubmit = () => {
    setResponse(`Resposta simulada para: "${chatMessage}"`);
    setChatMessage('');
  };

  return (
    <CustomModal
      title="Novo Treinamento"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <TrainingContainer>
        <Form layout="vertical">
          <Form.Item label="Nome do Treinamento">
            <Input 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite o nome do treinamento"
            />
          </Form.Item>

          <Form.Item label="Upload de Arquivo">
            <Upload
              beforeUpload={() => false} // Não faz upload automático
              fileList={fileList}
              onChange={handleFileChange}
              multiple={false}
              accept=".csv,.json,.txt" // Ajuste os tipos de arquivo permitidos
            >
              <CustomButton icon={<UploadOutlined />}>Escolher Arquivo</CustomButton>
            </Upload>
            <CustomButton type="primary" onClick={handleUpload} style={{ marginTop: 16 }}>
              Enviar Arquivo
            </CustomButton>
          </Form.Item>

          <Form.Item label="Teste do Modelo">
            <Space direction="vertical" style={{ width: '100%' }}>
              <TextArea
                rows={4}
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Digite sua mensagem para o modelo de IA"
              />
              <CustomButton 
                type="primary"
                icon={<PlayCircleOutlined />}
                onClick={handleChatSubmit}
              >
                Enviar
              </CustomButton>
              {response && (
                <Card title="Resposta do Modelo" style={{ backgroundColor: '#b6b6b667', color: '#060606' }}>
                  {response}
                </Card>
              )}
            </Space>
          </Form.Item>
        </Form>
      </TrainingContainer>
    </CustomModal>
  );
};

export default NewTrainingPage;
