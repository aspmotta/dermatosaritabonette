# Planejamento e Status de Desenvolvimento - Website Dra. Sarita Bonette

**Última Atualização:** 07 de Agosto de 2025

## 1. Status Atual do Desenvolvimento

O projeto encontra-se na **Fase 1 (Fundação e Conteúdo Essencial)**. A análise do código e dos arquivos de projeto revela o seguinte estado:

- **Páginas Estruturadas:**
  - As páginas principais (`index.html`, `sobre.html`, `contato.html`) possuem uma estrutura HTML sólida, conteúdo inicial preenchido e estão funcionalmente operacionais.
  - A arquitetura de CSS (modular com `styles`, `components`, `utilities`) e o JavaScript (`vanilla JS` para interatividade) são de alta qualidade e bem organizados.

- **Seções em Desenvolvimento:**
  - **Serviços (`/servicos/`):** A página de índice existe, mas as páginas de detalhes dos tratamentos contêm conteúdo placeholder e precisam ser desenvolvidas.
  - **Blog (`/blog/`):** A seção está visualmente representada na `index.html`, mas a estrutura de artigos e a página principal do blog são placeholders.

- **Otimização e Performance:**
  - **SEO Técnico:** A base é excelente, com bom uso de metadags, `og:properties`, `canonical` URLs e microdados `Schema.org`.
  - **Imagens:** Há um esforço claro para otimização, com o uso de `srcset` e o formato `WebP`. No entanto, a tarefa de otimizar **todas** as imagens do site ainda está pendente e é marcada como de alta prioridade.

## 2. Padrão de Qualidade

Para garantir a consistência, performance e profissionalismo do site, todas as novas implementações devem seguir os padrões abaixo:

- **Padrão de Qualidade para Páginas:**
  - **HTML Semântico:** Utilizar tags HTML5 apropriadas (`<main>`, `<section>`, `<article>`, `<nav>`, etc.) para estruturar o conteúdo.
  - **Acessibilidade (WCAG AA):** Todas as imagens devem ter atributos `alt` descritivos. Elementos interativos devem usar atributos `aria-*` quando necessário.
  - **Metadados:** Cada página deve ter um `<title>` único e uma `<meta name="description">` concisa e relevante.
  - **Responsividade:** As páginas devem ser perfeitamente funcionais e visualmente agradáveis em todos os dispositivos (mobile, tablet, desktop).

- **Padrão de Qualidade para Imagens:**
  - **Formato:** Utilizar **WebP** como padrão, com fallback para JPEG ou PNG para garantir compatibilidade.
  - **Compressão:** As imagens devem ser comprimidas para o menor tamanho de arquivo possível sem perda de qualidade visual perceptível.
  - **Dimensionamento:** Utilizar o atributo `srcset` para servir imagens de tamanhos diferentes para resoluções de tela distintas, melhorando o tempo de carregamento.
  - **Nomenclatura:** Os nomes dos arquivos devem ser descritivos e usar hífens (ex: `dra-sarita-consultorio-leblon.webp`).

## 3. Roadmap de Sprints e Product Backlog Items (PBIs)

As tarefas foram reorganizadas para priorizar a geração de conteúdo, conforme solicitado. A otimização de imagens será realizada após a criação e o upload das imagens finais.

### Sprint 1: Geração de Conteúdo Essencial

- **PBI-01: Preenchimento das Páginas de Serviços**
  - **Descrição:** Desenvolver o conteúdo textual e visual para cada página de tratamento listada em `/servicos/index.html`.
  - **Páginas a serem criadas/editadas:**
    - `bioestimuladores-preenchimentos.html`
    - `dermatologia-clinica-integrada.html`
    - `mmp-terapia.html`
    - `peelings-quimicos.html`
    - `procedimentos-dermatologicos.html`
    - `remocao-sinais-cancer-pele.html`
    - `tecnologias-laser.html`
    - `toxina-botulinica.html`
    - `tricologia.html`
  - **Critérios de Aceitação:** Todas as páginas de serviço estão com conteúdo final e seguem o padrão de qualidade.

- **PBI-02: Enriquecimento da Página `sobre.html`**
  - **Descrição:** Expandir o conteúdo da página `sobre.html`, adicionando mais detalhes sobre a filosofia de trabalho, formação e a trajetória profissional da Dra. Sarita Bonette.
  - **Critérios de Aceitação:** A página `sobre.html` oferece uma visão completa e aprofundada sobre a profissional.

### Sprint 2: Expansão de Conteúdo e Autoridade

- **PBI-03: Estruturação Completa do Blog**
  - **Descrição:** Desenvolver a página de listagem de artigos (`/blog/index.html`) e criar o template para os artigos individuais. Publicar os 3-5 primeiros artigos.
  - **Critérios de Aceitação:** A seção do blog está funcional, e os artigos iniciais estão publicados.

- **PBI-04: Desenvolvimento da Seção "Condições Tratadas"**
  - **Descrição:** Criar a estrutura e as páginas para a seção `/condicoes`, que detalhará as diversas condições dermatológicas tratadas.
  - **Critérios de Aceitação:** A seção `/condicoes` está no ar, com conteúdo inicial para as principais condições.

### Backlog (Pós-Sprints Iniciais)

- **PBI-05: Otimização de Todas as Imagens**
  - **Descrição:** Auditar todas as imagens presentes na pasta `/assets/images/` (incluindo as novas imagens de conteúdo). Comprimir e converter cada uma para o formato WebP, garantindo que os fallbacks estejam corretamente implementados no HTML.
  - **Critérios de Aceitação:** Todas as imagens do site são servidas em WebP (quando suportado) e estão otimizadas. Os diretórios `optimized_images*` devem ser consolidados ou removidos após a conclusão.
