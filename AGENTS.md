# AGENTS.md - Guia para Agentes de IA

Olá! Este documento serve como um guia para você, agente de IA, entender o contexto e as convenções deste projeto.

## 1. Visão Geral do Projeto

Este é o site institucional da **Dra. Sarita Bonette**, uma médica dermatologista. O objetivo do site é apresentar seus serviços, sua filosofia de trabalho e servir como um canal de contato e agendamento para pacientes.

O projeto é construído com foco em **alta qualidade de código, performance (especialmente no carregamento de imagens) e SEO técnico**.

## 2. Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3 (com variáveis CSS), e JavaScript (Vanilla JS).
- **Pré-processadores:** Sass/SCSS é utilizado para a escrita do CSS, embora os arquivos compilados (`.css`) estejam versionados no repositório.
- **Dependências (Node.js):** Existem scripts em `package.json` para tarefas de desenvolvimento, como otimização de imagens. Use `npm install` para instalar as dependências e `npm run <script>` para executar as tarefas.
- **Hospedagem:** O site está configurado para ser hospedado em um ambiente que suporta um arquivo `.htaccess` (como a Netlify, evidenciado pelo `netlify.toml`).

## 3. Convenções de Desenvolvimento

- **Estrutura de CSS:** O CSS é modular e está dividido em:
  - `assets/css/styles.css`: Estilos globais e base.
  - `assets/css/components.css`: Estilos para componentes reutilizáveis (cards, botões, etc.).
  - `assets/css/utilities.css`: Classes utilitárias (ex: `text-center`).

- **Otimização de Imagens:** Este é um ponto CRÍTICO do projeto.
  - **Formato Preferencial:** **WebP**. Sempre forneça um fallback para `JPG` ou `PNG`.
  - **Responsividade:** Use o elemento `<picture>` ou o atributo `srcset` para servir imagens de tamanhos apropriados para diferentes viewports.
  - **Compressão:** As imagens devem ser comprimidas antes de serem enviadas para o repositório. Existem scripts (`resize-images.js`, `resize-script.js`) que podem auxiliar nesse processo.

- **Commits e Branching:**
  - **Mensagens de Commit:** Siga o padrão "Conventional Commits". Ex: `feat: adiciona seção de depoimentos na home`.
  - **Branches:** Crie branches descritivas para cada nova feature ou correção. Ex: `feat/pagina-servicos-laser` ou `fix/menu-mobile-bug`.

## 4. Arquivos e Diretórios Chave

- **`docs/planejamento_desenvolvimento.md`:** **LEITURA OBRIGATÓRIA.** Contém o status atualizado do projeto, os padrões de qualidade e as próximas tarefas priorizadas. Sempre consulte este arquivo antes de iniciar uma nova tarefa.
- **`_PROJECT/`:** Contém os arquivos brutos de gerenciamento de projeto (status, roadmap, backlog). É a fonte da verdade para o arquivo de planejamento.
- **`assets/`:** Contém todos os assets estáticos (CSS, JS, imagens, ícones).
- **`servicos/`:** Contém as páginas detalhadas de cada tratamento. Esta é uma área que necessita de desenvolvimento de conteúdo.
- **`index.html`, `sobre.html`, `contato.html`:** Páginas principais e de alta visibilidade.

Sua principal diretriz é seguir o plano detalhado em `docs/planejamento_desenvolvimento.md`. Boa sorte!
