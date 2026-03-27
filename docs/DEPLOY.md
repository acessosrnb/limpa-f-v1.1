# Guia de Publicação — GitHub Pages

## Pré-requisitos

- Conta no [GitHub](https://github.com)
- Git instalado (opcional — upload via navegador funciona)

---

## Opção A: Upload via navegador

### 1. Criar repositório
1. Acesse [github.com/new](https://github.com/new)
2. Nome: `wf-limpa-fossa`
3. Visibilidade: **Public**
4. **NÃO** marque "Add a README"
5. **Create repository**

### 2. Enviar arquivos
1. Na página do repo vazio → **uploading an existing file**
2. Arraste a pasta descompactada
3. Commit: `feat: workflow board v1.0.0`

> Se a pasta `.github/` não subir pelo navegador, crie manualmente: **Add file → Create new file** → `.github/workflows/deploy-pages.yml` → cole o conteúdo.

### 3. Ativar GitHub Pages
1. **Settings → Pages → Source → GitHub Actions**

### 4. Acessar
```
https://SEU-USUARIO.github.io/wf-limpa-fossa/
```

---

## Opção B: Via Git

```bash
cd wf-limpa-fossa
git init && git branch -M main
git remote add origin https://github.com/SEU-USUARIO/wf-limpa-fossa.git
git add . && git commit -m "feat: workflow board v1.0.0"
git push -u origin main
```

Depois ative Pages em **Settings → Pages → Source → GitHub Actions**.

---

## Atualizar o site

Qualquer push em `main` dispara deploy automático.

## Domínio customizado

1. **Settings → Pages → Custom domain**
2. DNS: CNAME → `SEU-USUARIO.github.io`
3. Ative **Enforce HTTPS**

## Troubleshooting

| Problema | Solução |
|----------|---------|
| 404 após deploy | Verificar se `index.html` está na raiz |
| Workflow não aparece | Verificar `.github/workflows/deploy-pages.yml` |
| CSS não carrega | Caminhos devem ser relativos (`app/css/...`) |
