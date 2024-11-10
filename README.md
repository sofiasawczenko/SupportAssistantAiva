Título: **_Sistema de Investimento em Cripto Ativos_**

Sumário

[Introdução 3](#_Toc169438809)

[Público-Alvo 3](#_Toc169438810)

[Dores do PO 3](#_Toc169438811)

[Solução Proposta 3](#_Toc169438812)

[Modelagem do Sistema 3](#_Toc169438813)

[1\. Modelagem do Banco de Dados 3](#_Toc169438814)

[2\. Modelagem do Backend 4](#_Toc169438815)

[Infraestrutura do Sistema 6](#_Toc169438816)

[1\. Topologia Física 6](#_Toc169438817)

[2\. Topologia Lógica 7](#_Toc169438818)

# **Introdução**

O projeto tem como objetivo desenvolver um sistema de software que permita ao Product Owner (PO) Tio Patinhas investir em criptoativos de maneira segura, eficiente e acessível via web. Este documento descreve o escopo do produto, o público-alvo, as dores identificadas e a solução proposta.

# Público-Alvo

- Investidores individuais e empresariais interessados em criptoativos.
- Usuário que preferem acessar seus investimentos via web.
- Indivíduos preocupados com segurança de seus dados financeiros.

# Dores do PO

1. Necessidade de investir em criptoativos online.
2. Acompanhamento diário dos investimentos.
3. Segurança de dados e valores trafegados em rede.
4. Transferência de valores entre várias empresas.
5. Preferência por acessar e efetuar investimentos via sistema web.

# Solução Proposta

- Investir em criptoativos de maneira segura e eficiente.
- Acompanhar diariamente seus investimentos através de relatórios detalhados.
- Garantir a segurança dos dados com autenticação de dois fatores e criptografia.
- Realizar transferência de valores entre diferentes contas.
- Usufruir de uma interface intuitiva e responsiva.

# Modelagem do Sistema

## Modelagem do Banco de Dados

A modelagem do banco de dados é crucial para garantir o desempenho e a integridade do sistema. O modelo Entidade-Relacionamento abaixo descreve as entidades, seus atributos e os relacionamento entre elas.

## Modelagem do Backend

A modelagem do backend é essencial para garantir que o sistema de investimento em criptoativos seja robusto, escalável e mantenha a integridade dos dados. O diagrama de classes a seguir descreve a estrutura das classes no backend, incluindo suas responsabilidades, atributos e métodos. Cada classe foi cuidadosamente projetada para refletir as operações e entidades principais do sistema, promovendo uma arquitetura limpa e modular.


Observação: A imagem em alta definição foi enviada no mesmo arquivo zip, com o nome “Class Diagram.png”.

O modelo de classes é composto pelas seguintes partes:

**Entidades Principais:**

- **Usuario:** Representa os usuários do sistema, armazenando informações como ID, nome, email, senha e data de criação.
- **Conta:** Representa as contas de investimento dos usuários, vinculando cada conta a um usuário e tipo de moeda, além de manter o saldo e número da conta.
- **Transacao:** Classe abstrata que serve como base para diferentes tipos de transações, como depósitos, saques e transferências, armazenando informações comuns a todas as transações.
- **Deposito:** Extensão da classe Transacao, representa um depósito feito em uma conta.
- **Saque:** Extensão da classe Transacao, representa um saque feito de uma conta, incluindo validação de saldo.
- **Transferencia:** Extensão da classe Transacao, representa uma transferência entre duas contas, incluindo as contas de origem e destino.

**Serviços:**

- **ServicoConta:** Fornece operações essenciais relacionadas às contas, como login, depósito, saque e transferência, aplicando regras de negócios específicas para cada operação.

**Repositórios:**

- **RepositorioUsuario:** Gerencia o acesso aos dados dos usuários, incluindo operações de busca e salvamento.
- **RepositorioConta:** Gerencia o acesso aos dados das contas, incluindo operações de busca e salvamento.
- **RepositorioTransacao:** Gerencia o acesso aos dados das transações, incluindo operações de busca e salvamento.

O diagrama de classes ilustra como essas partes interagem, garantindo que o sistema possa atender aos requisitos de segurança, eficiência e funcionalidade, proporcionando uma base sólida para o desenvolvimento do backend.

# Infraestrutura do Sistema

## Topologia Física

- Servidores de Aplicação:
  - Servidor Web: Hospeda a aplicação web onde os usuários acessam o sistema.
  - Servidor de API: Gerencia as solicitações de API, realizando a comunicação entre o frontend e backend.
  - Servidor de Aplicação: Processa a lógica de negócio do sistema, incluindo operações de depósitos, saques, transferências e atualização do preço dos tipos de moedas.
- Servidores de banco de dados:
  - Banco de Dados Primário: Armazena os dados críticos, como usuários, contas e transações.
  - Banco de Dados de Backup: Replica todos os dados do banco de dados primário, garantindo a redundância e a recuperação em caso de falha.
- Servidores de segurança:
  - Firewall: Protege a rede contra acessos não autorizados.
  - Servidor de Autenticação: Gerencia autenticação dos usuários, incluindo a autenticação de dois fatores (2FA).
- Servidores de Monitoramento:
  - Monitora o desempenho dos servidores, detectando falhas e garantindo a manutenção preventiva.
- Servidores de Backup e Recuperação:
  - Realiza backups regulares dos dados e das aplicações, garantindo a recuperação rápida em caso de falhas.

## Topologia Lógica

- Camada de Apresentação:
  - Frontend: interface web onde os usuários interagem com o sistema.
  - API Gateway: interface de api que serve como ponto de entrada para todas as solicitações do frontend.
- Camada de Aplicação:
  - Serviços de Aplicação: Componentes de backend que processam lógicas de negócios, como as operações de saque, deposito, transferência e atualização de preço do tipo de moeda.
  - Serviços de autenticação: Gerenciam a autenticação e autorização dos usuários.
- Camada de Dados:
  - Serviços de Banco de Dados: Gerenciam o acesso aos dados armazenados, incluindo consultas, inserções, atualizações e exclusões.
  - Serviços de Backup: Gerenciam a replicação e o backup dos dados.
- Camada de Segurança:
  - Serviços de Firewall: Protegem o sistema contra acessos não autorizados e ataques.
  - Serviços de Criptografia: Garantem que os dados sensíveis sejam transmitidos e forma segura.
