import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Button, Card, Col, Collapse, Divider, List, Row } from "antd";
import React from "react";
import { defaultColor } from "../../App";
import {
  Container,
  StyledCard,
  StyledPanel,
  StyledProgress,
  StyledStatistic,
  Text,
} from "./styles";

const ProfilePage = () => {
  const user = {
    name: "João Silva",
    area: "Suporte de Desenvolvimento",
    templatesSaved: 10,
    aiUsageRate: "75%",
    openedTickets: 45,
    aiUsageDays: 365,
    lastLoggedDays: 30,
    questionsFrequency: {
      "Criar Usuário": 5,
      "Negar acesso": 8,
      "Status de um pedido": 7,
      "Prorrogação de acesso": 6,
      "Atribuição de perfil": 9,
    },
    savedTemplates: [
      "Erro de Login",
      "Criação de Usuário no SAP",
      "Alteração de Acesso",
    ],
    savedTickets: [
      "Ticket #BugFix982 ",
      "Ticket #BugFix990",
      "Ticket #BugFix664",
    ],
  };

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Container>
      <StyledCard title="Informações do Usuário">
        <Text>
          <strong>Nome Completo:</strong> {user.name}
        </Text>
        <Text>
          <strong>Área de Atuação:</strong> {user.area}
        </Text>
      </StyledCard>

      <Divider />

      <Collapse defaultActiveKey={[]} onChange={onChange} style={defaultColor}>
        <StyledPanel header="Estatísticas" key="1">
          <Row gutter={16}>
            <Col span={8}>
              <Card bordered={false}>
                <StyledStatistic
                  title="Uso da IA"
                  value={user.aiUsageRate}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<ArrowUpOutlined />}
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <StyledStatistic
                  title="Dias Logados"
                  value={user.lastLoggedDays}
                  valueStyle={{ color: "#cf1322" }}
                  prefix={<ArrowDownOutlined />}
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <StyledStatistic
                  title="N° Chamados"
                  value={user.openedTickets}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<ArrowDownOutlined />}
                />
              </Card>
            </Col>
          </Row>
        </StyledPanel>

        <StyledPanel header="Frequência de Perguntas" key="2">
          {Object.keys(user.questionsFrequency).map((topic) => (
            <StyledProgress
              key={topic}
              percent={user.questionsFrequency[topic] * 10}
              size="small"
              format={() =>
                `${topic}: ${user.questionsFrequency[topic]} perguntas`
              }
              trailColor="#d0f8f4"
              strokeColor="#44d4c6"
            />
          ))}
        </StyledPanel>

        <StyledPanel header="Templates Salvos" key="3">
          <List
            dataSource={user.savedTemplates}
            renderItem={(item) => (
              <List.Item style={defaultColor}>{item}</List.Item>
            )}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="primary"
              style={{
                cursor: "pointer",
                marginTop: "16px",
                width: "50%",
                background: "#44d4c6",
                color: "#101216",
                fontWeight: "500",
              }}
            >
              Gerenciar Templates
            </Button>
          </div>
        </StyledPanel>

        <StyledPanel header="Tickets Salvos" key="4">
          <List
            dataSource={user.savedTickets}
            renderItem={(item) => (
              <List.Item style={defaultColor}>{item}</List.Item>
            )}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="primary"
              style={{
                marginTop: "16px",
                width: "50%",
                background: "#44d4c6",
                color: "#101216",
                fontWeight: "500",
              }}
            >
              Gerenciar Tickets
            </Button>
          </div>
        </StyledPanel>
      </Collapse>
    </Container>
  );
};

export default ProfilePage;
