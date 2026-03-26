# 🚀 Guia de Deploy - GitHub Pages

## 📋 Pré-requisitos
- Node.js 18+ instalado
- Git instalado
- Conta GitHub

## 1️⃣ Preparar o Repositório

### Opção A: Criar novo repositório (Recomendado)
```bash
# Extrair o arquivo zip
unzip mruva-portfolio-source.zip
cd mruva-portfolio

# Inicializar git
git init
git add .
git commit -m "Initial commit: mruva.com.br portfolio"

# Criar repositório no GitHub
# 1. Acesse https://github.com/new
# 2. Crie um repositório chamado: mruva-portfolio
# 3. Copie a URL do repositório

# Adicionar remote e fazer push
git remote add origin https://github.com/SEU_USUARIO/mruva-portfolio.git
git branch -M main
git push -u origin main
```

### Opção B: Usar repositório existente
```bash
cd seu-repositorio-existente
# Copiar arquivos do mruva-portfolio para o seu repositório
cp -r mruva-portfolio/* .
git add .
git commit -m "Add mruva portfolio"
git push origin main
```

## 2️⃣ Instalar Dependências

```bash
# Usar pnpm (recomendado)
pnpm install

# Ou npm
npm install

# Ou yarn
yarn install
```

## 3️⃣ Configurar GitHub Pages

### Passo 1: Habilitar GitHub Pages
1. Acesse seu repositório no GitHub
2. Vá para **Settings** → **Pages**
3. Em "Build and deployment":
   - Source: **GitHub Actions**
   - Clique em "Configure"

### Passo 2: Criar GitHub Actions Workflow
Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
          cname: mruva.com.br
```

## 4️⃣ Configurar Domínio Customizado (Opcional)

### Se você tem domínio próprio (mruva.com.br):
1. No repositório GitHub → **Settings** → **Pages**
2. Em "Custom domain", digite: `mruva.com.br`
3. Configure os DNS records no seu registrador:

```
CNAME record:
Host: www
Points to: seu-usuario.github.io

A records:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

## 5️⃣ Fazer Deploy

### Primeira vez (manual):
```bash
# Build local
pnpm run build

# Fazer push - GitHub Actions fará o deploy automaticamente
git push origin main
```

### Próximas atualizações:
```bash
# Fazer alterações
# Fazer commit e push
git add .
git commit -m "Update: descrição das mudanças"
git push origin main

# GitHub Actions fará o deploy automaticamente
```

## 6️⃣ Verificar Deploy

1. Acesse seu repositório no GitHub
2. Vá para **Actions**
3. Verifique se o workflow "Deploy to GitHub Pages" passou ✅
4. Acesse seu site:
   - Sem domínio customizado: `https://seu-usuario.github.io/mruva-portfolio`
   - Com domínio customizado: `https://mruva.com.br`

## 📝 Estrutura do Projeto

```
mruva-portfolio/
├── client/              # Frontend React
│   ├── public/         # Assets estáticos
│   ├── src/
│   │   ├── pages/      # Páginas (Home, Marketing, etc)
│   │   ├── components/ # Componentes reutilizáveis
│   │   ├── App.tsx     # Roteamento
│   │   └── index.css   # Estilos globais
│   └── index.html      # HTML entry point
├── server/             # Backend (não usado em GitHub Pages)
├── package.json        # Dependências
├── vite.config.ts      # Configuração Vite
└── tsconfig.json       # Configuração TypeScript
```

## 🔧 Comandos Úteis

```bash
# Desenvolvimento local
pnpm run dev

# Build para produção
pnpm run build

# Preview do build
pnpm run preview

# Verificar tipos TypeScript
pnpm run check

# Formatar código
pnpm run format
```

## ⚠️ Troubleshooting

### Problema: Build falha
**Solução:**
```bash
# Limpar cache
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### Problema: Rotas não funcionam no GitHub Pages
**Solução:** Já está configurado! O projeto usa Wouter (client-side routing) que funciona perfeitamente com GitHub Pages.

### Problema: Assets não carregam
**Solução:** Verificar se as imagens estão em CDN (já estão configuradas em `https://d2xsxph8kpxj0f.cloudfront.net/`).

## 🎉 Pronto!

Seu site está ao vivo! Compartilhe o link com o mundo:
- 🌐 GitHub Pages: `https://seu-usuario.github.io/mruva-portfolio`
- 🌍 Domínio customizado: `https://mruva.com.br`

## 📞 Suporte

Para dúvidas sobre GitHub Pages: https://docs.github.com/en/pages
Para dúvidas sobre o projeto: Consulte o README.md
