# Plano de Execução - PBI-04: Desenvolvimento da Seção "Condições Tratadas"

**Objetivo:** Criar uma nova seção enciclopédica no site, `/condicoes/`, para educar os usuários sobre diversas condições dermatológicas. Cada página de condição deve explicar a condição e, crucialmente, conectar o usuário aos tratamentos relevantes oferecidos no site.

---

## 1. Escopo e Arquivos

- **Arquivos a serem criados:**
  - `condicoes/index.html`: Página de listagem de todas as condições.
  - `condicoes/template-condicao.html`: Modelo base para uma página de condição.
  - `condicoes/acne.html`: Página de exemplo para a condição "Acne".
  - `condicoes/melasma.html`: Página de exemplo para a condição "Melasma".
  - `condicoes/rosacea.html`: Página de exemplo para a condição "Rosácea".

---

## 2. Requisitos Funcionais e Estruturais

- **Página de Listagem (`condicoes/index.html`):**
  - Deve ter um título `<h1>` como "Guia de Condições da Pele".
  - Apresentar as condições em uma grade de "cards" ou uma lista simples.
  - Cada item na lista deve ser um link para a página de detalhes da condição.
  - **V2 (Opcional):** Implementar um filtro por categorias (ex: "Condições Estéticas", "Condições Clínicas").

- **Modelo de Página de Condição (`condicoes/template-condicao.html`):**
  - Deve reutilizar o cabeçalho e rodapé do site.
  - A estrutura do conteúdo deve seguir o seguinte padrão:
    - `<h1>`: [Nome da Condição].
    - **Parágrafo Introdutório:** O que é a condição de forma resumida.
    - **Seção "Sintomas e Causas" (H2):** Descrição dos sinais visíveis e das causas conhecidas (genéticas, ambientais, etc.).
    - **Seção "Tratamentos Relacionados" (H2):** **Esta é a seção mais importante.** Deve listar os tratamentos disponíveis no site que são eficazes para a condição. Cada item da lista deve ser um link para a página correspondente em `/servicos/`.
    - **Seção "Prevenção e Cuidados Diários" (H2):** Dicas sobre como gerenciar a condição no dia a dia.
    - **CTA Final:** Um convite claro para agendar uma consulta para diagnóstico e plano de tratamento, com um botão que leva a `/contato.html`.

---

## 3. Detalhamento das Tarefas (Instruções para Agente)

### Parte A: Criação do Template da Página de Condição

1.  **Criar o arquivo base:** Crie `condicoes/template-condicao.html`.
2.  **Estruturar o HTML:** Reutilize a estrutura geral do site (`<head>`, navegação, rodapé).
3.  **Desenvolver a área de conteúdo:** Dentro do `<main>`, construa a estrutura HTML para as seções descritas nos requisitos. Use placeholders comentados e claros, especialmente para a seção de tratamentos.
    - Ex: `<!-- Links para páginas de /servicos/ --><ul><li><a href="#">[Nome do Tratamento]</a></li></ul>`.

### Parte B: Criação das Páginas de Condição de Exemplo

1.  **Iterar sobre a lista de condições de exemplo** (Acne, Melasma, Rosácea):
    a. **Copiar o template:** Crie um novo arquivo (ex: `condicoes/acne.html`) a partir de `condicoes/template-condicao.html`.
    b. **Gerar conteúdo:** Gere conteúdo placeholder relevante para cada seção (sintomas da acne, cuidados diários, etc.).
    c. **Preencher links de tratamento:** Esta é a etapa crucial. Para cada condição, identifique os tratamentos relevantes e adicione os links corretos.
        - **Exemplo para `acne.html`:** A lista de tratamentos pode incluir links para `/servicos/peelings-quimicos.html` e `/servicos/tecnologias-laser.html`.
        - **Exemplo para `melasma.html`:** Pode linkar para `/servicos/peelings-quimicos.html` e `/servicos/mmp-terapia.html`.
    d. **Substituir todos os placeholders** no arquivo com o conteúdo gerado e os links corretos.

### Parte C: Desenvolvimento da Página de Listagem

1.  **Criar o arquivo de índice:** Crie o arquivo `condicoes/index.html`.
2.  **Adicionar título:** Insira o `<h1>` principal.
3.  **Implementar a lista:** Crie um `<ul>` ou uma `div` container.
4.  **Popular a lista:** Para cada página de condição criada (acne.html, etc.), adicione um item de lista com um link para ela: `<li><a href="acne.html">Acne</a></li>`.
5.  **Salvar o arquivo.**

### Parte D: Estratégia de Navegação

- Por padrão, esta seção não será adicionada ao menu de navegação principal. Ela funcionará como conteúdo de suporte, para ser linkada a partir de posts do blog e, eventualmente, das próprias páginas de serviço (cross-linking). Nenhuma ação é necessária nesta etapa, mas é uma diretriz para o futuro.
