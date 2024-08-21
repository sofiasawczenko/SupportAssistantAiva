import React, { useState } from 'react';
import { Modal, Input, Select, DatePicker, message, Card, Form, Button, Upload } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { CustomModal, PromptContainer, CustomButton } from './styles';
import moment from 'moment';

const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

const PromptPage = ({ visible, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [scenarioDescription, setScenarioDescription] = useState('');
  const [idealScenarioDescription, setIdealScenarioDescription] = useState('');
  const [bugCode, setBugCode] = useState('');
  const [ticketCode, setTicketCode] = useState('');
  const [evidence, setEvidence] = useState([]);
  const [date, setDate] = useState(null);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleDateChange = (date) => {
    setDate(date ? date.format('YYYY-MM-DD') : null);
  };

  const handleUploadChange = (info) => {
    if (info.fileList.length > 0) {
      setEvidence(info.fileList);
    }
  };

  const handleSubmit = () => {
    if (!selectedCategory || !scenarioDescription || !idealScenarioDescription || !bugCode || !ticketCode || !date) {
      message.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    console.log('Form submitted:', {
      selectedCategory,
      scenarioDescription,
      idealScenarioDescription,
      bugCode,
      ticketCode,
      date,
      evidence
    });

    message.success('Chamado aberto com sucesso!');

    // Limpar o formulário após o envio
    setSelectedCategory('');
    setScenarioDescription('');
    setIdealScenarioDescription('');
    setBugCode('');
    setTicketCode('');
    setEvidence([]);
    setDate(null);
  };

  return (
    <CustomModal
      title="Abrir um novo Chamado"
      visible={visible}
      onCancel={() => {
        console.log('Modal closed');
        if (onClose) onClose(); // Adiciona o console.log aqui para verificar a chamada de onClose
      }}
      footer={null}
    >
      <PromptContainer>
        <Form layout="vertical">
          <Form.Item label="Categoria">
            <Select
              placeholder="Selecione uma categoria"
              value={selectedCategory}
              onChange={handleCategoryChange}
              style={{ width: '100%' }}
            >
              <Option value="SAP">SAP</Option>
              <Option value="usuario">Usuário</Option>
              <Option value="acesso">Acesso</Option>
              {/* Adicione mais opções conforme necessário */}
            </Select>
          </Form.Item>

          <Form.Item label="Descrição do Cenário">
            <TextArea
              rows={4}
              value={scenarioDescription}
              onChange={(e) => setScenarioDescription(e.target.value)}
              placeholder="Digite a descrição do cenário"
            />
          </Form.Item>

          <Form.Item label="Descrição do Cenário Ideal">
            <TextArea
              rows={4}
              value={idealScenarioDescription}
              onChange={(e) => setIdealScenarioDescription(e.target.value)}
              placeholder="Digite a descrição do cenário ideal"
            />
          </Form.Item>

          <Form.Item label="Data">
            <DatePicker
              format="YYYY-MM-DD"
              value={date ? moment(date, 'YYYY-MM-DD') : null}
              onChange={handleDateChange}
              style={{ width: '100%' }}
            />
          </Form.Item>

          <Form.Item label="Código do Bug">
            <Input
              value={bugCode}
              onChange={(e) => setBugCode(e.target.value)}
              placeholder="Digite o código do bug"
            />
          </Form.Item>

          <Form.Item label="Código do Chamado">
            <Input
              value={ticketCode}
              onChange={(e) => setTicketCode(e.target.value)}
              placeholder="Digite o código do chamado"
            />
          </Form.Item>

          <Form.Item label="Evidências">
            <Dragger
              multiple
              beforeUpload={() => false}
              onChange={handleUploadChange}
              fileList={evidence}
            >
              <p className="ant-upload-drag-icon">
                <PlayCircleOutlined />
              </p>
              <p className="ant-upload-text">Arraste e solte arquivos aqui para enviar</p>
              <p className="ant-upload-hint">Suporte para upload de múltiplos arquivos.</p>
            </Dragger>
          </Form.Item>

          <Form.Item>
            <CustomButton 
              type="primary"
              icon={<PlayCircleOutlined />}
              onClick={handleSubmit}
            >
              Enviar Chamado
            </CustomButton>
          </Form.Item>
        </Form>
      </PromptContainer>
    </CustomModal>
  );
};

export default PromptPage;
