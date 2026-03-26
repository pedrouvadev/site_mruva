# 🚀 Instruções de Atualização - Git Push para Dokploy

## Resumo das Mudanças Nesta Versão

✅ **Nova Página:** Inglês Avançado - Cambly (/ingles)  
✅ **Certificado Cambly:** Integrado com 69 horas de prática  
✅ **Submenu Atualizado:** Formações agora incluem Inglês  
✅ **Background em Todas as Páginas:** Gradient consistente  
✅ **Scroll ao Topo:** Automático ao navegar  
✅ **Header/Footer Componentizados:** Padrão em todas as páginas  
✅ **Página de Serviços Dedicada:** Removida da Home  
✅ **Animações:** Fade-in, slide-in, scale-in com delays  

---

## 📋 Passo a Passo - Na Sua Máquina Local

### 1️⃣ Clonar ou Atualizar o Repositório

Se você **ainda não clonou** o repositório:

```bash
git clone https://github.com/pedrouvadev/site_mruva.git
cd site_mruva
```

Se você **já tem o repositório** clonado:

```bash
cd site_mruva
git pull origin main
```

---

### 2️⃣ Extrair o Pack Atualizado

```bash
# Extrair o arquivo zip
unzip mruva-portfolio-final-v2.zip

# Copiar todos os arquivos para o repositório (CUIDADO: isso vai sobrescrever!)
# Opção 1: Se quiser substituir tudo
cp -r mruva-portfolio/* .

# Opção 2: Se quiser ser mais cuidadoso (recomendado)
# Copie manualmente os arquivos:
# - client/src/pages/English.tsx (novo)
# - client/src/components/Header.tsx (atualizado)
# - client/src/components/Footer.tsx (atualizado)
# - client/src/index.css (atualizado com animações)
# - client/src/App.tsx (atualizado com rota /ingles)
```

---

### 3️⃣ Verificar Status do Git

```bash
git status
```

Você deve ver algo como:

```
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  modified:   client/src/pages/Home.tsx
  modified:   client/src/pages/About.tsx
  modified:   client/src/pages/Services.tsx
  modified:   client/src/pages/Marketing.tsx
  modified:   client/src/pages/Development.tsx
  modified:   client/src/pages/ProjectManagement.tsx
  modified:   client/src/pages/AI.tsx
  modified:   client/src/pages/Fullstack.tsx
  modified:   client/src/components/Header.tsx
  modified:   client/src/components/Footer.tsx
  modified:   client/src/index.css
  modified:   client/src/App.tsx
  new file:   client/src/pages/English.tsx
```

---

### 4️⃣ Adicionar Mudanças ao Git

```bash
# Adicionar TODAS as mudanças
git add .

# Ou adicionar arquivos específicos
git add client/src/pages/English.tsx
git add client/src/components/Header.tsx
git add client/src/components/Footer.tsx
git add client/src/index.css
git add client/src/App.tsx
```

---

### 5️⃣ Fazer Commit

```bash
git commit -m "feat: Add English (Cambly) formation page, update components, add animations and backgrounds"
```

**Mensagem de commit mais descritiva (opcional):**

```bash
git commit -m "feat: Add English (Cambly) formation page

- New page: Inglês Avançado - Cambly (/ingles)
- Cambly certificate integrated (69 hours)
- Added to formations submenu in Header
- Background gradient in all pages
- Auto scroll to top on navigation
- Componentized Header and Footer
- Added fade-in, slide-in animations
- Dedicated Services page
- CTA buttons standardized"
```

---

### 6️⃣ Fazer Push para GitHub

```bash
git push origin main
```

**Esperado:**

```
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 8 threads
Compressing objects: 100% (12/12), done.
Writing objects: 100% (12/12), 45.2 KiB | 2.3 MiB/s, done.
Total 12 (delta 3), reused 0 (delta 0), reused pack 0 (delta 0)
remote: Resolving deltas: 100% (3/3), done.
To https://github.com/pedrouvadev/site_mruva.git
   abc1234..def5678  main -> main
```

---

### 7️⃣ Dokploy Fará Deploy Automático

Após fazer push, o Dokploy receberá o webhook e:

1. ✅ Clonará o repositório atualizado
2. ✅ Instalará dependências (`pnpm install`)
3. ✅ Fará build (`pnpm build`)
4. ✅ Iniciará o servidor (`pnpm start`)
5. ✅ Seu site estará atualizado em: `http://site-mr-uva-iprptw-d73f1c-84-46-253-241.traefik.me/`

---

## 🔍 Verificar Deploy no Dokploy

1. Acesse seu dashboard Dokploy
2. Vá para a aplicação "site-mr-uva"
3. Clique em "Deployments" ou "Activity"
4. Você verá um novo deploy iniciado
5. Aguarde até ver "Status: Running" ou "Success"

---

## ❌ Se Algo Der Errado

### Erro: "fatal: not a git repository"

```bash
# Você não está na pasta correta
cd site_mruva
```

### Erro: "Your branch is ahead of 'origin/main'"

```bash
# Você tem commits locais que não foram feitos push
git push origin main
```

### Erro: "Conflito de merge"

```bash
# Se houver conflito, resolva manualmente
# Edite os arquivos com conflito
# Depois faça:
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

### Dokploy não fez deploy automático

1. Verifique se o webhook está configurado em Settings > Webhooks
2. Tente fazer push novamente
3. Verifique os logs do Dokploy para erros

---

## 📊 Resumo de Arquivos Modificados

| Arquivo | Tipo | Mudança |
|---------|------|---------|
| `client/src/pages/English.tsx` | Novo | Página Inglês Avançado - Cambly |
| `client/src/pages/Home.tsx` | Modificado | Background + scroll ao topo |
| `client/src/pages/About.tsx` | Modificado | Background + scroll ao topo |
| `client/src/pages/Services.tsx` | Modificado | Background + scroll ao topo |
| `client/src/pages/Marketing.tsx` | Modificado | Background + scroll ao topo |
| `client/src/pages/Development.tsx` | Modificado | Background + scroll ao topo |
| `client/src/pages/ProjectManagement.tsx` | Modificado | Background + scroll ao topo |
| `client/src/pages/AI.tsx` | Modificado | Background + scroll ao topo |
| `client/src/pages/Fullstack.tsx` | Modificado | Background + scroll ao topo |
| `client/src/components/Header.tsx` | Modificado | Submenu com Inglês |
| `client/src/components/Footer.tsx` | Modificado | Componentizado |
| `client/src/App.tsx` | Modificado | Rota /ingles adicionada |
| `client/src/index.css` | Modificado | Animações CSS adicionadas |

---

## ✅ Checklist Final

- [ ] Extraí o arquivo zip
- [ ] Copiei os arquivos para o repositório local
- [ ] Rodei `git status` e revisei as mudanças
- [ ] Rodei `git add .`
- [ ] Rodei `git commit -m "..."`
- [ ] Rodei `git push origin main`
- [ ] Verifiquei o deploy no Dokploy
- [ ] Testei o site em: `http://site-mr-uva-iprptw-d73f1c-84-46-253-241.traefik.me/ingles`

---

## 🎯 Dúvidas?

Se tiver problemas:

1. Verifique os logs do Dokploy
2. Confirme que o webhook está configurado
3. Tente fazer um novo push
4. Verifique se não há conflitos de merge

**Seu site será atualizado automaticamente após o push! 🚀**
