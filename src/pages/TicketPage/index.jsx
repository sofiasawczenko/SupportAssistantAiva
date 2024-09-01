import {
  DownloadOutlined,
  DownOutlined,
  InboxOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Dropdown,
  Form,
  Menu,
  message,
  Space,
  Upload,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  CustomTooltip,
  dropdownMenuStyle,
  dropdownTitleHoverStyle,
  dropdownTitleStyle,
  FormContainer,
  HoverButton,
  itemMenuStyle,
  StyledQuestionIcon,
  StyledText,
  StyledTextArea,
  TitleContainer,
  UploadWrapper,
} from "./styles";

const { Dragger } = Upload;

const TicketForm = () => {
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const [loadingField, setLoadingField] = useState(null);
  const [selectedSistema, setSelectedSistema] = useState("Selecione o Sistema");
  const [selectedAmbiente, setSelectedAmbiente] = useState(
    "Selecione o Ambiente"
  );
  const [selectedN2Area, setSelectedN2Area] = useState("Selecione a Área N2");
  const [selectedTemplate, setSelectedTemplate] = useState(
    "Selecionar Template"
  );

  const handleFileChange = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const handleAIEnhance = (fieldName) => {
    setLoadingField(fieldName);
    setTimeout(() => {
      form.setFieldsValue({ [fieldName]: "Texto aprimorado pela IA." });
      setLoadingField(null);
      message.success(`${fieldName} foi melhorado pela IA`);
    }, 1000);
  };

  const handleDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleSave = () => {
    form
      .validateFields()
      .then(() => {
        message.success("Formulário salvo com sucesso!");
      })
      .catch(() => {
        message.error("Por favor, preencha os campos obrigatórios!");
      });
  };

  const handleExport = (format) => {
    form
      .validateFields()
      .then(() => {
        message.success(`Exportação em ${format} iniciada.`);
      })
      .catch(() => {
        message.error("Por favor, preencha os campos obrigatórios!");
      });
  };

  const handleTemplateSelect = (key) => {
    setSelectedTemplate(key);
    console.log(`Template selecionado: ${key}`);

    if (key === "Erro de Login") {
      console.log('Aplicando template "Erro de Login"...');
      form.setFieldsValue({
        descricaoProblema:
          'O sistema de login está apresentando um erro crítico que impede todos os usuários de acessarem suas contas. A tela de login exibe uma mensagem de erro "500 - Internal Server Error" após a inserção de credenciais.',
        passosReproduzir:
          '1. Acesse a página de login do sistema.\n2. Insira qualquer combinação de nome de usuário e senha.\n3. Observe que a página exibe um erro "500 - Internal Server Error" e não permite o acesso.',
        sistemaAplicacao: "SAP",
        impacto: "Impacto Alto",
        dataHoraOcorrido: null,
        usuarioAfetado: "Usuário Exemplo",
        tentativasSolucao:
          "1. Reiniciei o servidor do sistema.\n2. Limpei o cache do navegador.\n3. Verifiquei os logs do servidor para mensagens de erro.",
        errosMensagensLog:
          "Error 500: Internal Server Error.\nStack trace: at /login (server.js:123)",
        ambiente: "PROD",
        n2Area: "Infraestrutura",
        anexos: [],
      });
      message.info('Template "Erro de Login" aplicado.');
    } else {
      message.info(`Template selecionado: ${key}`);
    }
  };

  useEffect(() => {
    console.log("Campos atualizados:", form.getFieldsValue());
  }, [form]);

  const templatesMenu = (
    <Menu
      onClick={({ key }) => handleTemplateSelect(key)}
      style={dropdownMenuStyle}
    >
      {[
        "Erro de Login",
        "Erro de Conexão",
        "Erro de Banco de Dados",
        "Problema de Performance",
        "Erro de Permissão",
        "Problema de Autenticação",
        "Erro de Aplicação",
      ].map((template) => (
        <Menu.Item key={template} style={itemMenuStyle}>
          {template}
        </Menu.Item>
      ))}
    </Menu>
  );

  const sistemasMenu = (
    <Menu
      onClick={({ key }) => setSelectedSistema(key)}
      style={dropdownMenuStyle}
    >
      {["SAP", "Service Desk", "Service Now"].map((sistema) => (
        <Menu.Item key={sistema} style={itemMenuStyle}>
          {sistema}
        </Menu.Item>
      ))}
    </Menu>
  );

  const ambientesMenu = (
    <Menu
      onClick={({ key }) => setSelectedAmbiente(key)}
      style={dropdownMenuStyle}
    >
      {["QAS", "DEV", "PROD"].map((ambiente) => (
        <Menu.Item key={ambiente} style={itemMenuStyle}>
          {ambiente}
        </Menu.Item>
      ))}
    </Menu>
  );

  const n2AreasMenu = (
    <Menu
      onClick={({ key }) => setSelectedN2Area(key)}
      style={dropdownMenuStyle}
    >
      {[
        "Infraestrutura",
        "Desenvolvimento",
        "Banco de Dados",
        "Cyber Segurança",
        "Ciência de Dados",
      ].map((area) => (
        <Menu.Item key={area} style={itemMenuStyle}>
          {area}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <FormContainer>
      <TitleContainer>
        Use este checklist junto com a inteligência artificial integrada para
        criar chamados mais detalhados. Ao finalizar, você pode salvar ou fazer
        o download para anexar ao ticket.
      </TitleContainer>

      <div style={{ textAlign: "right", marginBottom: "1rem" }}>
        <Dropdown
          overlay={templatesMenu}
          trigger={["click"]}
          overlayStyle={dropdownMenuStyle}
        >
          <Button
            style={dropdownTitleStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                dropdownTitleHoverStyle.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                dropdownTitleStyle.backgroundColor)
            }
          >
            {selectedTemplate} <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      <Form form={form} layout="vertical">
        <Form.Item
          label={<StyledText>Descrição do Problema</StyledText>}
          name="descricaoProblema"
          style={{ marginBottom: "1rem" }}
        >
          <StyledTextArea
            rows={4}
            placeholder="Explicação clara e concisa do problema que está sendo enfrentado. Quanto mais específico, melhor."
          />
        </Form.Item>

        <Form.Item
          label={<StyledText>Passos para Reproduzir o Problema</StyledText>}
          name="passosReproduzir"
          style={{ marginBottom: "1rem" }}
        >
          <StyledTextArea
            rows={4}
            placeholder="Descreva os passos que levaram ao problema para que seja possível reproduzi-lo."
          />
        </Form.Item>

        <Form.Item
          label={<StyledText>Sistema ou Aplicação Envolvida</StyledText>}
          name="sistemaAplicacao"
          style={{ marginBottom: "1rem" }}
        >
          <Dropdown
            overlay={sistemasMenu}
            trigger={["click"]}
            overlayStyle={dropdownMenuStyle}
          >
            <Button
              style={dropdownTitleStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  dropdownTitleHoverStyle.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  dropdownTitleStyle.backgroundColor)
              }
            >
              {selectedSistema} <DownOutlined />
            </Button>
          </Dropdown>
        </Form.Item>

        <Form.Item
          label={<StyledText>Impacto</StyledText>}
          name="impacto"
          style={{ marginBottom: "1rem" }}
        >
          <Space direction="vertical">
            {["Impacto Baixo", "Impacto Médio", "Impacto Alto"].map(
              (impacto) => (
                <Checkbox key={impacto} style={{ color: "white" }}>
                  {impacto}
                </Checkbox>
              )
            )}
          </Space>
        </Form.Item>

        <Form.Item
          label={<StyledText>Data e Hora do Ocorrido</StyledText>}
          name="dataHoraOcorrido"
          style={{ marginBottom: "1rem" }}
        >
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            onChange={handleDateChange}
          />
        </Form.Item>

        <Form.Item
          label={<StyledText>Usuário Afetado</StyledText>}
          name="usuarioAfetado"
          style={{ marginBottom: "1rem" }}
        >
          <StyledTextArea rows={2} placeholder="Nome do usuário afetado" />
        </Form.Item>

        <Form.Item
          label={<StyledText>Tentativas de Solução</StyledText>}
          name="tentativasSolucao"
          style={{ marginBottom: "1rem" }}
        >
          <StyledTextArea rows={3} placeholder="Descreva as suas tentativas" />
        </Form.Item>

        <Form.Item
          label={<StyledText>Erros ou Mensagens de Log</StyledText>}
          name="errosMensagensLog"
          style={{ marginBottom: "1rem" }}
        >
          <StyledTextArea
            rows={3}
            placeholder="Inclua erros ou mensagens de log relevantes relacionados ao problema."
          />
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
          style={{ marginBottom: "1rem" }}
        >
          <UploadWrapper
            style={{
              color: "white",
              backgroundColor: "#474747",
              borderRadius: "5px",
            }}
          >
            <Dragger
              multiple
              fileList={fileList}
              onChange={handleFileChange}
              showUploadList={{ showRemoveIcon: true }}
              accept=".png, .jpg, .jpeg, .pdf, .docx, .txt"
            >
              <p className="ant-upload-drag-icon" style={{ color: "white" }}>
                <InboxOutlined />
              </p>
              <p className="ant-upload-text" style={{ color: "white" }}>
                Arraste ou clique para fazer o upload
              </p>
              <p className="ant-upload-hint" style={{ color: "white" }}>
                Suporte a arquivos .png, .jpg, .jpeg, .pdf, .docx e .txt
              </p>
            </Dragger>
          </UploadWrapper>
        </Form.Item>

        <Form.Item>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <HoverButton
              type="primary"
              onClick={handleSave}
              icon={<SaveOutlined />}
            >
              Salvar Template
            </HoverButton>
            <Button
              icon={<DownloadOutlined />}
              onClick={() => handleExport("txt")}
            >
              Exportar TXT
            </Button>
            <Button
              icon={<DownloadOutlined />}
              onClick={() => handleExport("pdf")}
            >
              Exportar PDF
            </Button>
          </div>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export default TicketForm;
