# � Receitas Online - Plataforma para Universitários

**Projeto SENAI — Solução para Alimentação Acessível**

## 👨‍🎓 **Aluno**: Washington Lyniker
#### link do Github Pages: https://washington-ux-ux.github.io/Projeto-de-implementa-o-de-projetos-do-senai-areias/

---

## � Sobre o Projeto

Este projeto foi desenvolvido como parte de uma atividade do SENAI, com o objetivo de solucionar um problema real enfrentados por jovens que estão começando a viver sozinhos.

### 🎯 Persona: Sofia — Universitária e a "Fome Oculta"
- **Idade:** 19 anos  
- **Situação:** Mora sozinha pela primeira vez em uma república  

#### 🚨 O Problema
Sofia enfrenta desafios comuns entre universitários:
- Conhecimento culinário limitado (basicamente macarrão instantâneo)
- Orçamento reduzido
- Acredita que cozinhar é caro e demorado
- Sofre com cansaço constante devido à má alimentação

Esse cenário representa a **"fome oculta"** — quando a pessoa se alimenta, mas não consome os nutrientes necessários.

---

## 💡 Solução Proposta

Plataforma web completa de receitas com foco em:
- 🍲 **Receitas simples** - Passo a passo fácil
- 💰 **Baixo custo** - Opções de R$ 3 a R$ 9
- ⚡ **Preparo rápido** - Pratos em minutos
- 🥗 **Nutrição balanceada** - Alternativas saudáveis

---

## ✨ Funcionalidades Completas

### 🔐 Sistema de Usuários
- ✅ **Cadastro de usuários** com validação
- ✅ **Login seguro** com persistência
- ✅ **Sessão mantida** entre recarregamentos
- ✅ **Logout funcional**

### 📱 Interface Principal
- ✅ **Design responsivo** para todos dispositivos
- ✅ **Filtro por categorias** (Refeição, Lanche, Bebida, Instantânea)
- ✅ **Grid visual** com 35 receitas
- ✅ **Detalhes completos** de cada receita

### 💬 Sistema Social
- ✅ **Comentários** por receita
- ✅ **Likes/Dislikes** para avaliação
- ✅ **Persistência** de dados no localStorage
- ✅ **Acesso controlado** (apenas logados podem interagir)

### 🎨 Experiência do Usuário
- ✅ **Animações suaves** e transições
- ✅ **Feedback visual** em todas interações
- ✅ **Modal de login/registro** elegante
- ✅ **Filtro inteligente** com animação

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Design moderno com gradientes
- **JavaScript ES6+** - Funcionalidades completas
- **LocalStorage** - Persistência de dados

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Tipagem segura
- **API RESTful** - Endpoints completos

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v18+)
- Git

### Instalação e Execução

```bash
# Clonar o repositório
git clone https://github.com/Washington-ux-ux/Projeto-de-implementa-o-de-projetos-do-senai-areias.git

# Entrar na pasta
cd Projeto-de-implementa-o-de-projetos-do-senai-areias

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run start:dev

# Ou rodar diretamente
tsx --env-file=.env server.ts
```

### Acesso
- **Aplicação:** http://localhost:3000
- **API:** http://localhost:3000/api

---

## 📁 Estrutura do Projeto

```
implemento sofia/
├── index.html              # Frontend completo (raiz)
├── docs/                   # Assets para GitHub Pages
│   └── assets/
│       └── image/
│           ├── image.png   # Imagens das receitas
│           └── video.png   # Vídeos das receitas
├── src/                    # Código backend
│   ├── controllers/        # Controladores API
│   │   └── recipe-controller.ts
│   ├── services/           # Regras de negócio
│   │   └── recipe-services.ts
│   ├── repository/         # Acesso a dados
│   │   └── recipe-repository.ts
│   ├── models/             # Tipagens
│   │   ├── recipe-models.ts
│   │   └── http-response-model.ts
│   ├── data/               # Base de dados
│   │   └── recipe.json     # 35 receitas completas
│   └── utils/              # Utilitários
│       └── http-helper.ts
├── app.ts                  # Configuração Express
├── routes.ts               # Definição das rotas
├── server.ts               # Inicialização do servidor
├── package.json            # Dependências
├── .env                    # Variáveis de ambiente
└── README.md              # Este arquivo
```

---
## Imagem do Front-End

![Frontend](./docs/assets/image/front.png)
---

## 🎯 Deploy - GitHub Pages

O projeto está configurado para funcionar tanto em desenvolvimento local quanto no GitHub Pages:

### Desenvolvimento Local
- ✅ **API completa** com Node.js
- ✅ **35 receitas** dinâmicas
- ✅ **Backend TypeScript**

### GitHub Pages (Produção)
- ✅ **Frontend puro** - Html | CSS | Javascript
- ✅ **Dados mockados** - Receitas embutidas
- ✅ **Funcionalidades completas** - Login, comentários, likes
- ✅ **Performance máxima** - Carregamento instantâneo

---

## 📊 Estatísticas do Projeto

### Receitas Disponíveis
- 🍝 **Refeições:** 14 opções
- 🥪 **Lanches:** 13 opções  
- 🥤 **Bebidas:** 7 opções
- ⚡ **Instantâneas:** 1 opção
- **Total:** 35 receitas únicas

### Faixas de Preço
- 💰 **Econômico:** R$ 3-5 (18 receitas)
- 💵 **Médio:** R$ 6-7 (12 receitas)
- 💸 **Caro:** R$ 8-9 (5 receitas)

---

## 🔧 Endpoints da API

### Receitas
- `GET /api/recipes` - Todas as receitas
- `GET /api/recipes/:id` - Receita específica por id
- `GET /api/recipes/category/:genre` - Por categoria
- `GET /api/recipes/ingredient/:ingredient` - Por ingrediente

---

## 🎨 Features Implementadas

- [x] **Sistema de usuários** completo
- [x] **Login e registro** com validação
- [x] **35 receitas** organizadas
- [x] **Filtro por categorias** funcional
- [x] **Sistema de comentários** completo
- [x] **Likes e dislikes** por receita
- [x] **Persistência de dados** no localStorage
- [x] **Design responsivo** moderno
- [x] **Animações e transições** suaves
- [x] **Deploy automático** no GitHub Pages

---

## 🎯 Objetivo Final

Proporcionar uma solução **prática, acessível e eficiente** para melhorar a qualidade alimentar de jovens adultos, promovendo saúde e autonomia na cozinha através da tecnologia.

---

## 🌟 Destaques do Projeto

- 💡 **Inovação:** Solução real para problema social
- 🎨 **Design:** Interface moderna e intuitiva
- 🔧 **Tecnologia:** Stack completo e moderno
- 📱 **Acessibilidade:** Funciona em qualquer dispositivo
- 🚀 **Performance:** Otimizado para produção
- 💾 **Dados:** Persistência inteligente
- 🌐 **Deploy:** Disponível globalmente

---

**Desenvolvido com ❤️ para ajudar universitários a comerem melhor!**
