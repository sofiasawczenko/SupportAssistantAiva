import React, { useState, useEffect  } from 'react';
import { Form, Input, Button, Upload, Checkbox, DatePicker, Space, Menu, Dropdown, Tooltip, message } from 'antd';
import { DownOutlined, DownloadOutlined, SaveOutlined, InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { StyledText, FormContainer, TitleContainer, CustomTooltip, StyledIcon, IconButton, SaveButton, UploadWrapper, StyledQuestionIcon } from './styles';

const { Dragger } = Upload;

const TicketForm = () => {
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const [loadingField, setLoadingField] = useState(null);
  const [selectedSistema, setSelectedSistema] = useState('Selecione o Sistema');
  const [selectedAmbiente, setSelectedAmbiente] = useState('Selecione o Ambiente');
  const [selectedN2Area, setSelectedN2Area] = useState('Selecione a Área N2');
  const [selectedTemplate, setSelectedTemplate] = useState('Selecionar Template');

  const handleFileChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const handleAIEnhance = (fieldName) => {
    setLoadingField(fieldName);
    setTimeout(() => {
      form.setFieldsValue({ [fieldName]: 'Texto aprimorado pela IA.' });
      setLoadingField(null);
      message.success(`${fieldName} foi melhorado pela IA`);
    }, 1000);
  };

  const handleDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleSave = () => {
    form.validateFields()
      .then(() => {
        message.success('Formulário salvo com sucesso!');
      })
      .catch(() => {
        message.error('Por favor, preencha os campos obrigatórios!');
      });
  };

  const handleExport = (format) => {
    form.validateFields()
      .then(() => {
        message.success(`Exportação em ${format} iniciada.`);
      })
      .catch(() => {
        message.error('Por favor, preencha os campos obrigatórios!');
      });
  };

  const handleTemplateSelect = (key) => {
    setSelectedTemplate(key);

    console.log(`Template selecionado: ${key}`); 
    
    if (key === 'Erro de Login') {
      console.log('Aplicando template "Erro de Login"...');

      form.setFieldsValue({
        descricaoProblema: 'O sistema de login está apresentando um erro crítico que impede todos os usuários de acessarem suas contas. A tela de login exibe uma mensagem de erro "500 - Internal Server Error" após a inserção de credenciais.',
        passosReproduzir: '1. Acesse a página de login do sistema.\n2. Insira qualquer combinação de nome de usuário e senha.\n3. Observe que a página exibe um erro "500 - Internal Server Error" e não permite o acesso.',
        sistemaAplicacao: 'SAP',
        impacto: 'Impacto Alto',
        dataHoraOcorrido: null, 
        usuarioAfetado: 'Usuário Exemplo',
        tentativasSolucao: '1. Reiniciei o servidor do sistema.\n2. Limpei o cache do navegador.\n3. Verifiquei os logs do servidor para mensagens de erro.',
        errosMensagensLog: 'Error 500: Internal Server Error.\nStack trace: at /login (server.js:123)',
        ambiente: 'PROD',
        n2Area: 'Infraestrutura',
        anexos: []
      });
      message.info('Template "Erro de Login" aplicado.');
    } else {
      message.info(`Template selecionado: ${key}`);
    }
  };

  console.log('Valores definidos no formulário:', form.getFieldsValue());
  
  useEffect(() => {
    console.log('Campos atualizados:', form.getFieldsValue());
  }, [form]);

  const templates = (
    <Menu onClick={({ key }) => handleTemplateSelect(key)}>
      <Menu.Item key="Erro de Login">Erro de Login</Menu.Item>
      <Menu.Item key="Erro de Conexão">Erro de Conexão</Menu.Item>
      <Menu.Item key="Erro de Banco de Dados">Erro de Banco de Dados</Menu.Item>
      <Menu.Item key="Problema de Performance">Problema de Performance</Menu.Item>
      <Menu.Item key="Erro de Permissão">Erro de Permissão</Menu.Item>
      <Menu.Item key="Problema de Autenticação">Problema de Autenticação</Menu.Item>
      <Menu.Item key="Erro de Aplicação">Erro de Aplicação</Menu.Item>
    </Menu>
  );

  const sistemas = (
    <Menu onClick={({ key }) => setSelectedSistema(key)}>
      <Menu.Item key="SAP">SAP</Menu.Item>
      <Menu.Item key="Service Desk">Service Desk</Menu.Item>
      <Menu.Item key="Service Now">Service Now</Menu.Item>
    </Menu>
  );

  const ambientes = (
    <Menu onClick={({ key }) => setSelectedAmbiente(key)}>
      <Menu.Item key="QAS">QAS</Menu.Item>
      <Menu.Item key="DEV">DEV</Menu.Item>
      <Menu.Item key="PROD">PROD</Menu.Item>
    </Menu>
  );

  const n2Areas = (
    <Menu onClick={({ key }) => setSelectedN2Area(key)}>
      <Menu.Item key="Infraestrutura">Infraestrutura</Menu.Item>
      <Menu.Item key="Desenvolvimento">Desenvolvimento</Menu.Item>
      <Menu.Item key="Banco de Dados">Banco de Dados</Menu.Item>
      <Menu.Item key="Cyber Segurança">Cyber Segurança</Menu.Item>
      <Menu.Item key="Ciência de Dados">Ciência de Dados</Menu.Item>
    </Menu>
  );

  return (
    <FormContainer>
      <TitleContainer>
        Use este checklist junto com a inteligência artificial integrada para criar chamados mais detalhados. Ao finalizar, você pode salvar ou fazer o download para anexar ao ticket.
      </TitleContainer>
      
      <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
        <Dropdown overlay={templates} trigger={['click']}>
          <Button>
            {selectedTemplate} <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      <Form form={form} layout="vertical">
      <Form.Item
          label={<StyledText>Descrição do Problema</StyledText>}
          name="descricaoProblema"
          style={{ marginBottom: '1rem' }}
        >
          <Input.TextArea rows={4} placeholder="Explicação clara e concisa do problema que está sendo enfrentado. Quanto mais específico, melhor." />
      </Form.Item>


      <Form.Item
        label={<StyledText>Passos para Reproduzir o Problema</StyledText>}
        name="passosReproduzir"
        style={{ marginBottom: '1rem' }}
      >
        <Input.TextArea placeholder="Descreva os passos que levaram ao problema para que seja possível reproduzi-lo." rows={4} />
      </Form.Item>


        <Form.Item
          label={<StyledText>Sistema ou Aplicação Envolvida</StyledText>}
          name="sistemaAplicacao"
          style={{ marginBottom: '1rem' }}
        >
          <Dropdown overlay={sistemas} trigger={['click']}>
            <Button>
              {selectedSistema} <DownOutlined />
            </Button>
          </Dropdown>
        </Form.Item>

        <Form.Item
          label={<StyledText>Impacto</StyledText>}
          name="impacto"
          style={{ marginBottom: '1rem' }}
        >
          <Space direction="vertical">
            <Checkbox>Impacto Baixo</Checkbox>
            <Checkbox>Impacto Médio</Checkbox>
            <Checkbox>Impacto Alto</Checkbox>
          </Space>
        </Form.Item>

        <Form.Item
          label={<StyledText>Data e Hora do Ocorrido</StyledText>}
          name="dataHoraOcorrido"
          style={{ marginBottom: '1rem' }}
        >
          <Space direction="vertical">
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" onChange={handleDateChange} />
          </Space>
        </Form.Item>

        <Form.Item
          label={<StyledText>Usuário Afetado</StyledText>}
          name="usuarioAfetado"
          style={{ marginBottom: '1rem' }}
        >
          <Input placeholder="Nome do usuário afetado" />
        </Form.Item>

        <Form.Item
            label={<StyledText>Tentativas de Solução</StyledText>}
            name="tentativasSolucao"
            style={{ marginBottom: '1rem' }}
          >
            <Input.TextArea rows={3} placeholder="Descreva as suas tentativas" />
        </Form.Item>

        <Form.Item
          label={<StyledText>Erros ou Mensagens de Log</StyledText>}
          name="errosMensagensLog"
          style={{ marginBottom: '1rem' }}
        >
          <Input.TextArea rows={3} placeholder="Inclua erros ou mensagens de log relevantes relacionados ao problema." />
       </Form.Item>


        <Form.Item
          label={<StyledText>Ambiente</StyledText>}
          name="ambiente"
          style={{ marginBottom: '1rem' }}
        >
          <Dropdown overlay={ambientes} trigger={['click']}>
            <Button>
              {selectedAmbiente} <DownOutlined />
            </Button>
          </Dropdown>
        </Form.Item>

        <Form.Item
          label={<StyledText>Área N2</StyledText>}
          name="n2Area"
          style={{ marginBottom: '1rem' }}
        >
          <Dropdown overlay={n2Areas} trigger={['click']}>
            <Button>
              {selectedN2Area} <DownOutlined />
            </Button>
          </Dropdown>
        </Form.Item>

        <Form.Item
          label={
            <StyledText>
              Anexos ou Capturas de Tela
              <CustomTooltip title="Anexe arquivos relevantes ou capturas de tela que ajudem a ilustrar o problema.">
                <StyledQuestionIcon />
              </CustomTooltip>
            </StyledText>
          }
          name="anexos"
          style={{ marginBottom: '1rem' }}
        >
          <UploadWrapper>
            <Dragger
              multiple
              fileList={fileList}
              onChange={handleFileChange}
              showUploadList={{ showRemoveIcon: true }}
              accept=".png, .jpg, .jpeg, .pdf, .docx, .txt"
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Arraste ou clique para fazer o upload</p>
              <p className="ant-upload-hint">
                Suporte a arquivos .png, .jpg, .jpeg, .pdf, .docx e .txt
              </p>
            </Dragger>
          </UploadWrapper>
        </Form.Item>


        <Form.Item>
          <Space>
            <SaveButton type="primary" onClick={handleSave} icon={<SaveOutlined />}>
              Salvar Template
            </SaveButton>
            <Button icon={<DownloadOutlined />} onClick={() => handleExport('txt')}>
              Exportar TXT
            </Button>
            <Button icon={<DownloadOutlined />} onClick={() => handleExport('pdf')}>
              Exportar PDF
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export default TicketForm;
