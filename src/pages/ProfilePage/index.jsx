// src/components/ProfilePage/index.jsx

import React from 'react';
import { Card, Col, Row, Button, List, Collapse, Divider } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Container, StyledCard, Text, StyledStatistic, StyledCollapse, StyledProgress, StyledCardHeader } from './styles';

const { Panel } = Collapse;

const ProfilePage = () => {
  const user = {
    name: 'João Silva',
    area: 'Suporte de Desenvolvimento',
    templatesSaved: 10,
    aiUsageRate: '75%',
    openedTickets: 45,
    aiUsageDays: 365,
    lastLoggedDays: 30,
    questionsFrequency: {
      'Criar Usuário': 5,
      'Negar acesso': 8,
      'Status de um pedido': 7,
      'Prorrogação de acesso': 6,
      'Atribuição de perfil': 9,
    },
    savedTemplates: [
      'Erro de Login',
      'Criação de Usuário no SAP',
      'Alteração de Acesso',
    ],
    savedTickets: [
      'Ticket #BugFix982',
      'Ticket #BugFix990',
      'Ticket #BugFix664',
    ],
  };

  const handleCollapseChange = (key) => {
    console.log(key);
  };

  return (
    <Container>
      <StyledCard>
        <StyledCardHeader>Informações do Usuário</StyledCardHeader>
        <Divider style={{ borderColor: '#504f4f', borderWidth: '0.5px' }} />
        <Text><strong>Nome Completo:</strong> {user.name}</Text>
        <Text><strong>Área de Atuação:</strong> {user.area}</Text>
      </StyledCard>

      <StyledCollapse defaultActiveKey={[]} onChange={handleCollapseChange}>
        <Panel
          header={<span style={{ color: 'black', fontFamily: 'Fira Sans Condensed' }}>Estatísticas</span>}
          key="1"
        >
          <Row gutter={10}>
            <Col span={8}>
              <Card bordered={false}>
                <StyledStatistic
                  title="Uso da IA"
                  value={user.aiUsageRate}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <StyledStatistic
                  title="Dias Logados"
                  value={user.lastLoggedDays}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowDownOutlined />}
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <StyledStatistic
                  title="N° Chamados"
                  value={user.openedTickets}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowDownOutlined />}
                />
              </Card>
            </Col>
          </Row>
        </Panel>

        <Panel
          header={<span style={{ color: 'black', fontFamily: 'Fira Sans Condensed' }}>Frequência de Perguntas</span>}
          key="2"
        >
          {Object.keys(user.questionsFrequency).map(topic => (
            <StyledProgress
              key={topic}
              percent={user.questionsFrequency[topic] * 10}
              size="small"
              format={() => `${topic}: ${user.questionsFrequency[topic]} perguntas`}
            />
          ))}
        </Panel>

        <Panel
          header={<span style={{ color: 'black', fontFamily: 'Fira Sans Condensed' }}>Templates Salvos</span>}
          key="3"
        >
          <List
            dataSource={user.savedTemplates}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="primary"
              style={{ cursor: 'pointer', marginTop: '16px', width: '50%', backgroundColor: '#1FB8A9', borderColor: '#1FB8A9' }}
            >
              Gerenciar Templates
            </Button>
          </div>
        </Panel>

        <Panel
          header={<span style={{ color: 'black', fontFamily: 'Fira Sans Condensed' }}>Tickets Salvos</span>}
          key="4"
        >
          <List
            dataSource={user.savedTickets}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="primary"
              style={{ marginTop: '16px', width: '50%', backgroundColor: '#1FB8A9', borderColor: '#1FB8A9' }}
            >
              Gerenciar Tickets
            </Button>
          </div>
        </Panel>
      </StyledCollapse>
    </Container>
  );
};

export default ProfilePage;
