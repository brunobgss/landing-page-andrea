# 🚀 Guia de Deploy - Landing Page Detox21

## 📋 Pré-requisitos
- Conta no GitHub
- Conta na Vercel (pode criar em https://vercel.com)

## 🔧 Passo 1: Criar repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: `landing-page-andrea` (ou outro nome de sua preferência)
3. Deixe **público** ou **privado** (sua escolha)
4. **NÃO** marque "Initialize with README"
5. Clique em "Create repository"

## 📤 Passo 2: Conectar com GitHub

Execute os comandos abaixo no terminal (substitua `SEU_USUARIO` pelo seu usuário do GitHub):

```bash
git remote add origin https://github.com/SEU_USUARIO/landing-page-andrea.git
git branch -M main
git push -u origin main
```

## 🌐 Passo 3: Deploy na Vercel

### Opção A: Via Interface Web (Mais Fácil)

1. Acesse https://vercel.com
2. Faça login com sua conta GitHub
3. Clique em "Add New Project"
4. Selecione o repositório `landing-page-andrea`
5. A Vercel detectará automaticamente as configurações do `vercel.json`
6. Clique em "Deploy"
7. Aguarde alguns segundos e seu site estará online!

### Opção B: Via CLI

```bash
npm i -g vercel
vercel login
vercel
```

Siga as instruções na tela.

## ✅ Pronto!

Após o deploy, você receberá um link como:
`https://landing-page-andrea.vercel.app`

Este link pode ser compartilhado com sua tia!

## 🔄 Atualizações Futuras

Para atualizar o site após fazer mudanças:

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

A Vercel atualizará automaticamente o site em alguns segundos!

