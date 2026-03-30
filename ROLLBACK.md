# Guia de Rollback - Branch de Backup

## Status Atual
- **Branch de Backup**: `backup-deploy-2026-03-30`
- **Branch Principal**: `main`
- **Data**: 30 de março de 2026

## O que foi feito neste deploy de backup?

✅ **Fixes implementados:**
- Removido todas as referências ao Manus AI
- Corrigido problema do Footer nas páginas de serviços
- Atualizado Home.tsx e ServicesEn.tsx com novos ícones SVG
- Removido `overflow-hidden` que cortava conteúdo
- Adicionado Fragment wrapper para elementos JSX adjacentes
- Build validado sem erros

## Como fazer Rollback (reverter para main)

### Opção 1: Reverter via Git (mais seguro)
```bash
# 1. Voltar para a branch main
git checkout main

# 2. Fazer pull das atualizações mais recentes
git pull origin main

# 3. Fazer deploy da branch main (automático via GitHub Actions)
# O workflow de deploy padrão vai ativar automaticamente
```

### Opção 2: Reverter commit específico (se necessário)
```bash
# 1. Se encontrar problemas, pode fazer revert do commit específico
git revert <commit-hash>

# 2. Fazer push para main
git push origin main
```

### Opção 3: Usar Tags para Versionamento (recomendado para futuro)
```bash
# Criar tag para este backup
git tag -a backup-2026-03-30 -m "Backup version with footer fixes"
git push origin backup-2026-03-30

# Para voltar a um tag específico no futuro
git checkout <tag-name>
```

## Monitoramento após Deploy

1. **Verificar build status no GitHub**:
   - Acesse: https://github.com/pedrouvadev/site_mruva/actions
   - Procure pelo workflow "Deploy Backup to GitHub Pages"

2. **Testar o site**:
   - Versão backup: Será deployada para o GitHub Pages
   - Acesse https://www.mruva.com.br ou o domínio correspondente

3. **Verificar console (Developer Tools)**:
   - Procure por erros de JavaScript
   - Verifique se os ícones estão carregando corretamente
   - Teste o footer em `/servicos` e `/en/services`

## Análise Pré-Rollback (verificar antes de reverter)

**Fazer rollback se:**
❌ O site não carrega
❌ Erros JavaScript na console
❌ Footer não aparece em nenhuma página
❌ Imagens quebradas

**Não fazer rollback se:**
✅ Site carrega normalmente
✅ Footer aparece em /servicos e /en/services
✅ Nenhum erro na console
✅ Todas as páginas renderizam corretamente

## Comandos Rápidos

### Ver diferenças entre branches
```bash
git diff main backup-deploy-2026-03-30
```

### Ver commits dessa branch
```bash
git log main..backup-deploy-2026-03-30
```

### Fazer reset (desfazer tudo)
```bash
git reset --hard origin/main
git push origin main --force-with-lease  # Usar apenas se absolutamente necessário
```

## Próximas Etapas

1. **Se backup está OK**: Fazer merge para main
   ```bash
   git checkout main
   git merge backup-deploy-2026-03-30
   git push origin main
   ```

2. **Se houver problemas**: Execute rollback imediatamente

3. **Criar nova branch para próximas alterações**:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b backup-deploy-YYYY-MM-DD
   ```

---

**Criado em**: 30 de março de 2026  
**Versão**: 1.0  
**Status**: Deploy da branch de backup em progresso
