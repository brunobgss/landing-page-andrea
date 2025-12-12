# Landing Page - Detox21 - Andréa Alexandre

Landing page para o produto Detox21 da Andréa Alexandre (Natureza em Gotas).

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e design responsivo)
- JavaScript (Vanilla)
- Google Fonts (Poppins e Playfair Display)

## 📁 Estrutura do Projeto

```
landing-page-andrea/
├── index.html          # Página principal
├── styles.css          # Estilos e design
├── script.js           # Interatividade e animações
└── README.md          # Este arquivo
```

## 🎨 Paleta de Cores

A paleta de cores foi baseada no Instagram @naturezaemgotass:

- **Roxo Principal**: #8B6F9E
- **Rosa Acento**: #D4A5B8
- **Verde Natureza**: #7FB069
- **Creme de Fundo**: #F5F0E8

## 📦 Deploy na Vercel

### Opção 1: Deploy via Interface Web da Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "Add New Project"
3. Conecte seu repositório Git (GitHub, GitLab ou Bitbucket)
4. Ou faça upload direto dos arquivos
5. A Vercel detectará automaticamente que é um projeto estático
6. Clique em "Deploy"

### Opção 2: Deploy via CLI da Vercel

```bash
# Instale a CLI da Vercel globalmente
npm i -g vercel

# No diretório do projeto, execute:
vercel

# Siga as instruções no terminal
```

### Opção 3: Deploy via GitHub

1. Crie um repositório no GitHub
2. Faça push dos arquivos
3. Na Vercel, importe o repositório
4. Configure o domínio personalizado (se tiver comprado na Hostinger)

## 🌐 Configuração de Domínio (Hostinger)

1. Na Hostinger, acesse o painel de controle do domínio
2. Vá em "DNS" ou "Gerenciar DNS"
3. Adicione os seguintes registros:

   **Para domínio principal:**
   - Tipo: A
   - Nome: @
   - Valor: 76.76.21.21 (IP da Vercel - verifique na documentação atual)

   **Para www:**
   - Tipo: CNAME
   - Nome: www
   - Valor: cname.vercel-dns.com

4. Na Vercel, vá em Settings > Domains
5. Adicione seu domínio
6. Siga as instruções de verificação

## 💳 Integração de Gateway de Pagamento

A seção de checkout está preparada para receber a integração do gateway de pagamento. Você pode usar:

- **MercadoPago**: [Documentação](https://www.mercadopago.com.br/developers/pt/docs)
- **Braip**: [Documentação](https://braip.com/)
- **Hotmart**: [Documentação](https://developers.hotmart.com/)
- **Kiwi**: [Documentação](https://kiwify.com.br/)

### Exemplo de Integração (MercadoPago)

1. Crie uma conta no MercadoPago
2. Obtenha suas credenciais (Public Key e Access Token)
3. Adicione o script do MercadoPago no `index.html`:

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

4. Substitua o conteúdo da seção `.payment-placeholder` no HTML
5. Implemente a lógica de pagamento no JavaScript

## 📝 Personalizações Necessárias

Antes de fazer o deploy, certifique-se de:

- [ ] Adicionar o vídeo de apresentação real (substituir o placeholder)
- [ ] Adicionar foto real da Andréa (substituir o placeholder)
- [ ] Integrar o gateway de pagamento escolhido
- [ ] Atualizar links do WhatsApp (já está com o número da Andréa)
- [ ] Adicionar Google Analytics (se necessário)
- [ ] Configurar meta tags para SEO
- [ ] Adicionar imagens reais dos produtos/bônus (se houver)

## 🔧 Desenvolvimento Local

Para visualizar a página localmente:

1. Abra o arquivo `index.html` diretamente no navegador
2. Ou use um servidor local:

```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

Acesse `http://localhost:8000` no navegador.

## 📱 Responsividade

A landing page é totalmente responsiva e foi testada para:

- Desktop (1920px+)
- Laptop (1366px - 1920px)
- Tablet (768px - 1366px)
- Mobile (320px - 768px)

## 🎯 SEO

Algumas práticas de SEO já implementadas:

- Meta description
- Títulos semânticos (H1, H2, H3)
- Estrutura HTML semântica
- Alt text para imagens (adicionar quando tiver imagens reais)

## 📞 Contato

Para dúvidas sobre o projeto, entre em contato através do WhatsApp da Andréa:
[WhatsApp](https://wa.me/5535999134417)

---

**Desenvolvido com ❤️ para Andréa Alexandre - Natureza em Gotas**

