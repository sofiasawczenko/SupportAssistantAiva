import React, { useState } from 'react';
import { Modal, Input, Select, message, Space, Card, Form, Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { CustomModal, PromptContainer, CustomButton } from './styles';

const { TextArea } = Input;
const { Option } = Select;

const NewTicketPage = ({ visible, onClose }) => {
  const [task, setTask] = useState('');
  const [context, setContext] = useState('');
  const [tone, setTone] = useState('');
  const [format, setFormat] = useState('');
  const [outputResult, setOutputResult] = useState('');

  const handlePromptSubmit = () => {
    if (!task || !context || !tone || !format) {
      message.error('Por favor, preencha todos os campos.');
      return;
    }

 
    setOutputResult(`Prompt gerado com sucesso!
      Tarefa: ${task}
      Contexto: ${context}
      Tom: ${tone}
      Formato: ${format}`);
    setTask('');
    setContext('');
    setTone('');
    setFormat('');
  };

  return (
    <CustomModal
      title="Criar um Prompt"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <PromptContainer>
        <Form layout="vertical">
          <Form.Item label="Tarefa">
            <TextArea
              rows={2}
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Descreva a tarefa"
            />
          </Form.Item>

          <Form.Item label="Contexto">
            <TextArea
              rows={4}
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Descreva o contexto"
            />
          </Form.Item>

          <Form.Item label="Tom">
            <Select
              placeholder="Selecione um tom"
              value={tone}
              onChange={setTone}
              style={{ width: '100%' }}
            >
              <Option value="formal">Formal</Option>
              <Option value="informal">Informal</Option>
              <Option value="amigável">Amigável</Option>
              <Option value="profissional">Profissional</Option>
              {/* Adicione mais opções conforme necessário */}
            </Select>
          </Form.Item>

          <Form.Item label="Formato">
            <Select
              placeholder="Selecione um formato"
              value={format}
              onChange={setFormat}
              style={{ width: '100%' }}
            >
              <Option value="texto">Texto</Option>
              <Option value="lista">Lista</Option>
              <Option value="parágrafo">Parágrafo</Option>
              {/* Adicione mais opções conforme necessário */}
            </Select>
          </Form.Item>

          <Form.Item>
            <CustomButton 
              type="primary"
              icon={<PlayCircleOutlined />}
              onClick={handlePromptSubmit}
            >
              Gerar Prompt
            </CustomButton>
          </Form.Item>

          {outputResult && (
            <Card title="Resultado do Prompt" style={{ backgroundColor: '#b6b6b667', color: '#060606' }}>
              {outputResult}
            </Card>
          )}
        </Form>
      </PromptContainer>
    </CustomModal>
  );
};

export default NewTicketPage;
