# Decisões de Arquitetura

Documento técnico que explica as escolhas estruturais do repositório.

---

## Diagnóstico da versão anterior

A versão v0 apresentava:

1. **Arquivo monolítico:** CSS embutido no HTML ou em arquivo único misturando tokens, layout e componentes.
2. **Sem camada de conteúdo:** dados do processo existiam apenas dentro do HTML, sem fonte canônica estruturada.
3. **Mermaid como apêndice:** diagrama tratado como arquivo auxiliar genérico, não como ativo de modelagem.
4. **Documentação na raiz:** README, guia de deploy e scripts misturados com assets e apresentação.
5. **Sem separação marca/interface:** cores da marca acopladas ao layout.

## Arquitetura-alvo (v1)

### Princípio: separação por responsabilidade

```
Marca       → brand/          → Tokens visuais, favicon
Apresentação→ app/            → CSS modular + JS
Conteúdo    → content/        → Dados estruturados (JSON)
Modelagem   → diagrams/       → Mermaid como fonte de verdade
Documentação→ docs/           → Guias operacionais
Publicação  → .github/        → Deploy automation
Entrada     → index.html      → Ponto de entrada único
```

### CSS modular em 3 camadas

| Arquivo | Responsabilidade | Dependência |
|---------|-----------------|-------------|
| `brand-tokens.css` | Variáveis CSS (cores, fontes) | Nenhuma |
| `layout.css` | Grid, espaçamento, responsividade | Consome tokens |
| `components.css` | Nodes, badges, cards, tabelas | Consome tokens |

Ordem de carregamento: `brand-tokens.css` → `layout.css` → `components.css`.

Vantagens:
- Trocar a marca = editar apenas `brand-tokens.css`
- Trocar o layout = editar apenas `layout.css`
- Adicionar componentes = editar apenas `components.css`

### Conteúdo como JSON

O arquivo `content/process-data.json` contém a fonte canônica do processo:
- Metadados do processo
- KPIs
- Atores e sistemas
- Fluxo principal (etapas tipadas)
- Fluxo de cadastro
- Automações com status
- Riscos com severidade
- Melhorias priorizadas
- Exceções
- Notas técnicas
- Status de validação

Isso permite:
- Futuras versões dinâmicas que leiam o JSON e renderizem automaticamente
- Integração com dashboards, ferramentas de BPM ou APIs
- Versionamento do processo independente da apresentação

### Mermaid como ativo de modelagem

Diagramas separados por fluxo:
- `fluxo-principal.mermaid` — ciclo operacional completo
- `fluxo-cadastro.mermaid` — fluxo auxiliar de cadastro

Tratados como fonte de modelagem, não como artefato secundário. Podem ser importados diretamente no Excalidraw, Mermaid Live Editor ou qualquer renderizador compatível.

### Raiz limpa

Na raiz ficam apenas:
- `index.html` — ponto de entrada
- `404.html` — página de erro
- `robots.txt` / `sitemap.xml` — SEO
- `.gitignore` — configuração Git
- `README.md` — documentação principal

Tudo mais está organizado em diretórios com propósito claro.

## Decisões de deploy

- **GitHub Pages via Actions** (não via branch `gh-pages`) — mais confiável, sem branch fantasma.
- **Caminhos relativos** — compatível com project sites (`usuario.github.io/repo/`).
- **Sem etapa de build** — site estático puro, deploy direto do source.

## Escalabilidade

Para adicionar um novo processo:
1. Criar novo JSON em `content/`
2. Criar novo Mermaid em `diagrams/`
3. Criar nova página HTML referenciando os mesmos CSS
4. O deploy pega automaticamente

---

*Documento gerado em 25/03/2026*
