# 🎥 Como Adicionar o Vídeo no Player

## 📋 Instruções Rápidas

### Opção 1: YouTube (Recomendado) ⭐

1. Abra o arquivo `script.js`
2. Encontre a linha que diz: `const VIDEO_YOUTUBE_ID = 'SEU_VIDEO_ID';`
3. Substitua `'SEU_VIDEO_ID'` pelo ID do vídeo do YouTube

**Como encontrar o ID do vídeo:**
- Se o link do YouTube é: `https://www.youtube.com/watch?v=abc123xyz`
- O ID é: `abc123xyz` (a parte depois de `v=`)

**Exemplo:**
```javascript
const VIDEO_YOUTUBE_ID = 'abc123xyz'; // ✅ Correto
```

### Opção 2: Vimeo

1. Abra o arquivo `script.js`
2. Comente a linha do YouTube e descomente a do Vimeo:
```javascript
// const VIDEO_YOUTUBE_ID = 'SEU_VIDEO_ID'; // Comente esta
const VIDEO_VIMEO_ID = 'SEU_VIDEO_ID'; // Descomente esta
```
3. Substitua `'SEU_VIDEO_ID'` pelo ID do vídeo do Vimeo

**Como encontrar o ID do Vimeo:**
- Se o link do Vimeo é: `https://vimeo.com/123456789`
- O ID é: `123456789` (o número no final)

### Opção 3: Vídeo Direto (MP4, WebM)

1. Faça upload do vídeo para um serviço de hospedagem (Vercel, Cloudflare, etc)
2. Abra o arquivo `script.js`
3. Comente a linha do YouTube e descomente a do vídeo direto:
```javascript
// const VIDEO_YOUTUBE_ID = 'SEU_VIDEO_ID'; // Comente esta
const VIDEO_DIRECT_URL = 'https://seu-dominio.com/video.mp4'; // Descomente esta
```
4. Substitua pela URL do seu vídeo

## ✅ Depois de Configurar

1. Salve o arquivo `script.js`
2. Faça commit e push:
```bash
git add script.js
git commit -m "Adicionar vídeo ao player"
git push
```

3. A Vercel atualizará automaticamente!

## 🎯 Funcionamento

- Ao clicar no player, o vídeo será carregado automaticamente
- O placeholder desaparece e o vídeo começa a tocar
- Funciona em desktop e mobile

## 💡 Dica

**YouTube é a opção mais recomendada** porque:
- ✅ Não consome espaço de hospedagem
- ✅ Otimização automática para diferentes dispositivos
- ✅ Suporte a legendas e controles nativos
- ✅ Gratuito e fácil de usar

