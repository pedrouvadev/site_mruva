# 🎉 Mr. Uva - Portfolio Profissional v2.0

Site profissional completo com 8 páginas, 34 certificações integradas, design glassmorphic neon 2026, animações fluidas e totalmente responsivo.

## 📱 Páginas Disponíveis

| Página | URL | Descrição |
|--------|-----|-----------|
| **Home** | `/` | Hero épico com 5 formações principais |
| **Sobre** | `/sobre` | Trajetória profissional (1997-2026) com fotos |
| **Marketing Digital** | `/marketing` | Landing page de vendas - Goobec |
| **Desenvolvimento** | `/desenvolvimento` | FAT - 1.200 horas de formação técnica |
| **Gestão de Projetos** | `/gestao` | Metodologia Scrum - 120 horas |
| **IA & Google Cloud** | `/ia` | 25 Skill Badges + certificado oficial |
| **Fullstack Empower** | `/fullstack` | Stack React + Node.js moderno |
| **Inglês Avançado** | `/ingles` | Cambly - 2 anos, 69 horas de prática |
| **Serviços** | `/servicos` | 4 serviços principais |

## 🎨 Design & Tecnologia

### Stack Tecnológico
- **Frontend:** React 19 + TypeScript + Tailwind CSS v4
- **Build:** Vite 7.1
- **UI Components:** shadcn/ui
- **Animações:** CSS Keyframes + Framer Motion
- **Ícones:** Lucide React
- **Deployment:** Dokploy (Docker + Traefik)

### Paleta de Cores
- **Primária:** Indigo (#6366F1)
- **Secundária:** Cyan (#22D3EE)
- **Destaque:** Laranja (#F97316)
- **Background:** Dark Navy (#0F172A)
- **Texto:** Light Gray (#E2E8F0)

### Tipografia
- **Headings:** Space Grotesk (bold, display)
- **Body:** Inter (regular, readable)
- **Monospace:** Fira Code (código)

## 📊 Certificados Integrados

- ✅ 4 Certificados Marketing Digital (Google Ads, GA4, Meta Ads, Goobec)
- ✅ 1 Certificado Desenvolvimento FAT (placeholder para PNG)
- ✅ 1 Certificado Gestão de Projetos
- ✅ 25 Google Cloud Skill Badges (IA)
- ✅ 1 Certificado Google Cloud
- ✅ 1 Certificado Cambly (69 horas)
- ✅ 1 Foto 3x4 profissional (Home + Sobre)
- ✅ 1 Foto mercado financeiro (Sobre)

**Total: 34 Certificações/Assets**

## ✨ Recursos Principais

### Design
- ✅ Glassmorphic cards com efeito neon
- ✅ Gradient backgrounds em todas as páginas
- ✅ Scroll progress bar animada
- ✅ Hover effects interativos
- ✅ Responsive mobile-first

### Funcionalidades
- ✅ Navegação fixa com submenu de formações
- ✅ Scroll automático ao topo ao navegar
- ✅ Animações fade-in, slide-in, scale-in
- ✅ CTA único com WhatsApp integrado
- ✅ "Agendar Call" em todas as páginas
- ✅ Footer padrão componentizado
- ✅ SEO completo com meta tags

### Performance
- ✅ Vite build otimizado
- ✅ Imagens em CDN (sem local assets)
- ✅ Code splitting automático
- ✅ Lazy loading de componentes

## 🚀 Deploy

### Dokploy (Recomendado)
1. Conecte seu repositório GitHub
2. Configure webhook automático
3. Cada push fará deploy automático
4. URL: `http://site-mr-uva-iprptw-d73f1c-84-46-253-241.traefik.me/`

### GitHub Pages (Alternativa)
1. Configure branch `gh-pages`
2. GitHub Actions fará build e deploy
3. URL: `https://pedrouvadev.github.io/site_mruva/`

## 📝 Estrutura de Arquivos

```
mruva-portfolio/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Marketing.tsx
│   │   │   ├── Development.tsx
│   │   │   ├── ProjectManagement.tsx
│   │   │   ├── AI.tsx
│   │   │   ├── Fullstack.tsx
│   │   │   ├── English.tsx (NOVO)
│   │   │   ├── Services.tsx
│   │   │   └── NotFound.tsx
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── ui/ (shadcn/ui)
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.ts
```

## 🔧 Desenvolvimento Local

### Requisitos
- Node.js 22+
- pnpm 10+

### Instalação

```bash
# Clonar repositório
git clone https://github.com/pedrouvadev/site_mruva.git
cd site_mruva

# Instalar dependências
pnpm install

# Iniciar dev server
pnpm dev

# Acessar em http://localhost:3000
```

### Comandos Úteis

```bash
# Build para produção
pnpm build

# Preview do build
pnpm preview

# Type check
pnpm check

# Format código
pnpm format
```

## 📱 Responsividade

- ✅ Mobile (320px - 640px)
- ✅ Tablet (641px - 1024px)
- ✅ Desktop (1025px+)
- ✅ Ultra-wide (1441px+)

## 🔐 SEO & Acessibilidade

- ✅ Meta tags completas
- ✅ Open Graph (OG) tags
- ✅ Sitemap automático
- ✅ Robots.txt configurado
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus rings visíveis

## 🎯 CTAs Principais

- **Agendar Call:** WhatsApp (+55 11 97876-8690)
- **Solicitar Auditoria:** WhatsApp
- **Ver Detalhes:** Navegação interna para páginas de formação

## 📈 Próximas Melhorias Sugeridas

1. **Formulário de Contato** com integração de email (Resend/SendGrid)
2. **Página de Blog** com artigos técnicos
3. **Seção de Depoimentos** de clientes/alunos
4. **Dark Mode Toggle** para tema claro
5. **Integração com Calendly** para agendamento
6. **Analytics Avançado** (Umami já integrado)
7. **Newsletter** com captcha de emails

## 📞 Contato

- **WhatsApp:** [+55 11 97876-8690](https://wa.me/5511978768690)
- **Email:** pedrouvadev@gmail.com
- **LinkedIn:** [Pedro Uva](https://linkedin.com/in/mruva)
- **GitHub:** [pedrouvadev](https://github.com/pedrouvadev)

## 📄 Licença

© 2026 Pedro Uva. Todos os direitos reservados.
"Eu sou porque nós somos" — Ubuntu | Liberdade, Tecnologia e Propósito

---

**Versão:** 2.0  
**Data:** Março 26, 2026  
**Status:** ✅ Pronto para Produção
