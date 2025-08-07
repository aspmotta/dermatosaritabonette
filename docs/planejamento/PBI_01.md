# Plano de Execução - PBI-01: Preenchimento das Páginas de Serviços

**Objetivo:** Substituir o conteúdo placeholder das páginas de serviços por conteúdo real, detalhado e otimizado para SEO, seguindo um template padrão para garantir consistência e qualidade.

---

## 1. Escopo de Arquivos

Este PBI afeta os seguintes arquivos no diretório `/servicos/`:

1.  `bioestimuladores-preenchimentos.html`
2.  `dermatologia-clinica-integrada.html`
3.  `mmp-terapia.html`
4.  `peelings-quimicos.html`
5.  `procedimentos-dermatologicos.html`
6.  `remocao-sinais-cancer-pele.html`
7.  `tecnologias-laser.html`
8.  `toxina-botulinica.html`
9.  `tricologia.html`

---

## 2. Template de Conteúdo para Cada Página

Cada página de serviço deve ser estruturada com as seguintes seções para garantir que todas as informações essenciais sejam abordadas de forma clara e consistente.

- **Título Principal (H1):** Nome do tratamento. Ex: "Bioestimuladores de Colágeno e Preenchimentos com Ácido Hialurônico".
- **Parágrafo Introdutório:** Um resumo conciso (2-3 frases) sobre o tratamento, seus principais benefícios e para quem se destina.
- **Seção: "O que é?" (H2):**
  - Explicação detalhada do procedimento.
  - Como ele funciona em um nível técnico/biológico.
  - Quais substâncias ou tecnologias são utilizadas.
- **Seção: "Para quem é indicado?" (H2):**
  - Lista de condições ou preocupações estéticas que o tratamento aborda (ex: flacidez, rugas finas, perda de volume).
  - Perfil do paciente ideal.
- **Seção: "Principais Benefícios" (H2):**
  - Uma lista (bullet points) dos resultados e vantagens que o paciente pode esperar.
  - Foco em resultados naturais e na melhoria da saúde da pele.
- **Seção: "Como é o procedimento?" (H2):**
  - Descrição do passo a passo da consulta e do tratamento.
  - Duração média da sessão.
  - Informações sobre desconforto, anestesia e tempo de recuperação.
- **Call to Action (CTA) Final:**
  - Um parágrafo final convidando o leitor a agendar uma consulta para uma avaliação personalizada.
  - Botão de "Agendar Consulta" que leva para a página de contato.

---

## 3. Detalhamento das Tarefas (Instruções para Agente)

1.  **Iterar sobre os arquivos do escopo:** Para cada arquivo listado na Seção 1:
    a. **Ler o arquivo:** Carregue o conteúdo do arquivo HTML.
    b. **Identificar a área de conteúdo principal:** Localize o elemento `<main>` ou a `div` principal onde o conteúdo do serviço deve ser inserido.
    c. **Gerar conteúdo:** Com base no nome do arquivo (ex: `toxina-botulinica.html`), gere o conteúdo para cada seção descrita no "Template de Conteúdo" (Seção 2). O tom deve ser profissional, educativo e alinhado com a persona da Dra. Sarita Bonette.
    d. **Substituir o conteúdo:** Remova o texto placeholder existente e insira o novo conteúdo gerado, garantindo que ele esteja corretamente formatado com as tags HTML (`<h2>`, `<p>`, `<ul>`, `<li>`, etc.).
    e. **Verificar links:** Certifique-se de que o botão de CTA no final da página aponte para `/contato.html`.
    f. **Salvar a alteração:** Use a ferramenta `overwrite_file_with_block` para salvar o arquivo modificado.

2.  **Verificação Final:** Após modificar todos os arquivos, revise a página `/servicos/index.html` para garantir que todos os links para as páginas de detalhes ainda estejam funcionando corretamente.
