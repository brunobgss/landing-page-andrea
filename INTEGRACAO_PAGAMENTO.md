# Guia de Integração de Gateway de Pagamento

Este arquivo contém exemplos e instruções para integrar diferentes gateways de pagamento na landing page.

## 📍 Localização da Integração

A seção de checkout está localizada no HTML na linha que contém:
```html
<section class="checkout" id="checkout">
```

Substitua o conteúdo dentro de `.payment-placeholder` pela integração do gateway escolhido.

---

## 💳 MercadoPago

### 1. Adicione o script no `<head>` do HTML:

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

### 2. Substitua o `.payment-placeholder` por:

```html
<div id="mercadopago-checkout"></div>
<script>
  const mp = new MercadoPago('SUA_PUBLIC_KEY_AQUI', {
    locale: 'pt-BR'
  });

  const checkout = mp.checkout({
    preference: {
      id: 'ID_DA_PREFERENCIA'
    },
    render: {
      container: '#mercadopago-checkout',
      label: 'Pagar'
    }
  });
</script>
```

### 3. Crie a preferência no backend (Node.js exemplo):

```javascript
const mercadopago = require('mercadopago');
mercadopago.configure({
  access_token: 'SEU_ACCESS_TOKEN'
});

const preference = {
  items: [
    {
      title: 'Detox21 - Andréa Alexandre',
      quantity: 1,
      currency_id: 'BRL',
      unit_price: 49.90
    }
  ],
  back_urls: {
    success: 'https://seudominio.com/sucesso',
    failure: 'https://seudominio.com/erro',
    pending: 'https://seudominio.com/pendente'
  }
};

mercadopago.preferences.create(preference)
  .then(response => {
    // Use response.body.id como ID_DA_PREFERENCIA
  });
```

---

## 🛒 Hotmart

### 1. Adicione o script no `<head>`:

```html
<script src="https://pay.hotmart.com/js/hotmart.js"></script>
```

### 2. Substitua o `.payment-placeholder` por:

```html
<button id="hotmart-checkout" class="cta-button large">
  Comprar Agora
</button>

<script>
  document.getElementById('hotmart-checkout').addEventListener('click', function() {
    Hotmart.checkout({
      productId: 'SEU_PRODUCT_ID',
      successUrl: 'https://seudominio.com/sucesso',
      errorUrl: 'https://seudominio.com/erro'
    });
  });
</script>
```

---

## 💰 Braip

### 1. Adicione o script no `<head>`:

```html
<script src="https://www.braip.com/checkout.js"></script>
```

### 2. Substitua o `.payment-placeholder` por:

```html
<button id="braip-checkout" class="cta-button large">
  Comprar Agora
</button>

<script>
  document.getElementById('braip-checkout').addEventListener('click', function() {
    BraipCheckout.open({
      token: 'SEU_TOKEN_BRAIP',
      produto: 'SEU_PRODUTO_ID',
      valor: 49.90,
      moeda: 'BRL'
    });
  });
</script>
```

---

## 🎯 Kiwify

### 1. Adicione o script no `<head>`:

```html
<script src="https://kiwify.com.br/checkout.js"></script>
```

### 2. Substitua o `.payment-placeholder` por:

```html
<button id="kiwify-checkout" class="cta-button large">
  Comprar Agora
</button>

<script>
  document.getElementById('kiwify-checkout').addEventListener('click', function() {
    KiwifyCheckout.open({
      productId: 'SEU_PRODUCT_ID',
      onSuccess: function() {
        window.location.href = 'https://seudominio.com/sucesso';
      }
    });
  });
</script>
```

---

## 📝 Notas Importantes

1. **Segurança**: Nunca exponha suas chaves secretas/access tokens no frontend. Use um backend para criar preferências/pedidos.

2. **Testes**: Todos os gateways oferecem ambientes de sandbox/teste. Use-os antes de colocar em produção.

3. **Páginas de Sucesso/Erro**: Crie páginas separadas para tratar os retornos do pagamento:
   - `/sucesso.html` - Quando o pagamento for aprovado
   - `/erro.html` - Quando houver erro no pagamento
   - `/pendente.html` - Quando o pagamento estiver pendente

4. **Webhooks**: Configure webhooks nos gateways para receber notificações de mudanças no status do pagamento.

5. **Validação**: Sempre valide os pagamentos no backend antes de liberar o acesso ao produto.

---

## 🔒 Exemplo de Página de Sucesso

Crie um arquivo `sucesso.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagamento Aprovado - Detox21</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <section class="hero" style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
        <div class="container" style="text-align: center; color: white;">
            <h1 style="font-size: 3rem; margin-bottom: 20px;">✅ Pagamento Aprovado!</h1>
            <p style="font-size: 1.3rem; margin-bottom: 30px;">Você receberá um e-mail com as instruções de acesso ao Detox21 em breve.</p>
            <a href="index.html" class="cta-button">Voltar para a página inicial</a>
        </div>
    </section>
</body>
</html>
```

---

Para mais informações, consulte a documentação oficial de cada gateway.

