# 📑Projetos - Desafios

## Sobre o projeto

Este projeto apresenta dois desafios desenvolvidos durante as aulas de programação.

Os desafios trabalham com cadastro de informações, cálculos e organização dos dados utilizando JavaScript.

## Agenda de Consultas com Nutricionista

Neste projeto foi criada uma agenda de consultas com nutricionista.

Os dados utilizados são:

- ID
- Data
- Paciente
- Peso
- Altura

Antes de listar os dados, o programa calcula o IMC de cada paciente.

### Cálculo do IMC

A fórmula utilizada é:

```text
IMC = Peso / (Altura * Altura)
```

# Cadastro de Times de Futebol

Neste projeto foi criado um cadastro de times de futebol.

Os dados utilizados são:

- ID
- Nome
- Vitórias
- Empates
- Derrotas

O programa calcula quantos jogos cada time fez e quantos pontos conseguiu.

## Cálculo dos jogos:

```
Jogos = Vitórias + Empates + Derrotas
```
## Cálculo dos pontos

```
Pontos = (Vitórias * 3) + (Empates * 1)
```

## ⚙️Tecnologias utilizadas

- Node.js
- Visual Studio Code

## Como executar

Para executar o projeto de nutricionista:

```
node servidor/server.js
```

Para executar o cadastro de times:

```
node servidor/server.js
```
