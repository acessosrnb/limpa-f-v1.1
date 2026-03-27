# Workflow Board — Processo Limpa Fossa

**Sanama — GS Inima** · `WF-PROC-001` · v1.0.0

Painel operacional interativo do processo Limpa Fossa — mapeamento completo do fluxo de entrada de caminhões, inspeções, faturamento e cadastro de clientes.

---

## Arquitetura do repositório

```
wf-limpa-fossa/
│
├── index.html                  ← Entrada principal (workflow board)
├── 404.html                    ← Página de erro
├── robots.txt                  ← SEO
├── sitemap.xml                 ← Mapa do site
├── .gitignore
├── README.md                   ← Este arquivo
│
├── app/                        ← Camada de apresentação
│   ├── css/
│   │   ├── brand-tokens.css    ← Design tokens (cores, fontes)
│   │   ├── layout.css          ← Estrutura, grid, responsividade
│   │   └── components.css      ← Componentes visuais (nodes, badges, cards)
│   └── js/
│       └── board.js            ← Interações do painel
│
├── content/                    ← Camada de conteúdo estruturado
│   └── process-data.json       ← Dados do processo (fonte canônica)
│
├── diagrams/                   ← Camada de modelagem
│   ├── fluxo-principal.mermaid ← Fluxo operacional completo
│   └── fluxo-cadastro.mermaid  ← Fluxo auxiliar de cadastro
│
├── brand/                      ← Assets de marca
│   └── favicon.svg             ← Favicon institucional
│
├── docs/                       ← Documentação operacional
│   ├── DEPLOY.md               ← Guia de publicação no GitHub Pages
│   └── ARCHITECTURE.md         ← Decisões de arquitetura
│
└── .github/
    └── workflows/
        └── deploy-pages.yml    ← Deploy automático via GitHub Actions
```

## Camadas

| Camada | Diretório | Responsabilidade |
|--------|-----------|------------------|
| Apresentação | `app/` | CSS modular (tokens → layout → componentes) + JS |
| Conteúdo | `content/` | Dados estruturados do processo em JSON |
| Modelagem | `diagrams/` | Diagramas Mermaid como ativos de modelagem |
| Marca | `brand/` | Assets visuais institucionais |
| Documentação | `docs/` | Guias de deploy e arquitetura |
| Publicação | `.github/` | Workflow de deploy para GitHub Pages |

## Como usar

**Visualização local:** abra `index.html` no navegador. Sem dependências.

**Publicação:** veja [`docs/DEPLOY.md`](docs/DEPLOY.md).

**Diagrama Mermaid:** importe `diagrams/fluxo-principal.mermaid` no [Excalidraw](https://excalidraw.com) via plugin Mermaid.

**Dados do processo:** `content/process-data.json` contém a fonte canônica de todo o processo (etapas, atores, riscos, automações, melhorias). Útil para integração com ferramentas, dashboards ou futuras versões dinâmicas.

## Paleta de cores

| Token | Hex | Uso |
|-------|-----|-----|
| Primary Dark Blue | `#005C83` | Estrutura, bordas, swimlanes |
| Primary Light Cyan | `#31B0C8` | Destaques, decisões, links |
| Primary Olive Green | `#628A1A` | Automações, status positivos |
| Neutral Gray | `#979899` | Texto secundário |
| Background Black | `#000000` | Fundo base |

## Manutenção

**Alterar cores:** edite `app/css/brand-tokens.css`.
**Alterar layout:** edite `app/css/layout.css`.
**Alterar componentes:** edite `app/css/components.css`.
**Alterar conteúdo:** edite `index.html` (renderizado) e `content/process-data.json` (fonte canônica).
**Atualizar diagrama:** edite `diagrams/fluxo-principal.mermaid`.

---

*Gerado em 25/03/2026 · Baseado em transcrição de processo operacional*
