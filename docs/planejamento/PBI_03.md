# Plano de Execução - PBI-03: Estruturação Completa do Blog

**Objetivo:** Desenvolver a infraestrutura completa para a seção do blog, incluindo uma página de listagem de artigos, um modelo para posts individuais e a publicação de 3 a 5 artigos iniciais com conteúdo placeholder.

---

## 1. Escopo e Arquivos

- **Arquivos a serem modificados:**
  - `blog/index.html`: Será a página de listagem de todos os artigos.
  - `index.html`: Verificar se o link na seção "Últimas do Nosso Blog" aponta para `/blog/index.html`.
- **Arquivos a serem criados:**
  - `blog/artigo-template.html`: Um template base para todos os futuros artigos.
  - `blog/artigo-exemplo-1.html`: Primeiro post do blog.
  - `blog/artigo-exemplo-2.html`: Segundo post do blog.
  - `blog/artigo-exemplo-3.html`: Terceiro post do blog.

---

## 2. Requisitos Funcionais e Estruturais

- **Página de Listagem (`blog/index.html`):**
  - Deve exibir uma grade ou lista de "cards", onde cada card representa um artigo.
  - Cada card deve conter: Imagem de destaque, Título do artigo (clicável), Excerto (resumo) e Metadados (Data de publicação, Categoria).
  - A listagem deve ser ordenada cronologicamente, do mais recente para o mais antigo.

- **Modelo de Artigo (`blog/artigo-template.html`):**
  - Deve incluir o cabeçalho e rodapé padrão do site.
  - A estrutura do artigo (`<main>`) deve conter:
    - `<h1>`: Título do Artigo.
    - Imagem de destaque.
    - Metadados (Data, Categoria, Autor: Dra. Sarita Bonette).
    - Corpo do artigo (`<article>`), que conterá parágrafos, subtítulos (`<h2>`, `<h3>`), listas, etc.
    - (Opcional, para V2) Botões de compartilhamento em redes sociais.
    - (Opcional, para V2) Seção "Artigos Relacionados".

---

## 3. Detalhamento das Tarefas (Instruções para Agente)

### Parte A: Criação do Template do Artigo

1.  **Criar o arquivo base:** Crie um novo arquivo em `blog/artigo-template.html`.
2.  **Estruturar o HTML:** Copie a estrutura geral de uma página existente (como `sobre.html`) para reutilizar o `<head>`, o cabeçalho de navegação e o rodapé.
3.  **Desenvolver a área de conteúdo:** Dentro da tag `<main>`, implemente a estrutura definida nos "Requisitos Funcionais" para o modelo de artigo. Use placeholders claros e comentados.
    - Ex: `<!-- Título do Artigo --><h1>[TÍTULO AQUI]</h1>`, `<!-- Corpo do Artigo --><article><p>[CONTEÚDO AQUI]</p></article>`.

### Parte B: Criação dos Artigos de Exemplo

1.  **Iterar para criar 3 artigos:**
    a. **Copiar o template:** Para cada artigo de exemplo, crie um novo arquivo (ex: `blog/artigo-exemplo-1.html`) copiando o conteúdo de `blog/artigo-template.html`.
    b. **Gerar conteúdo placeholder:** Crie um título, um corpo de texto (com alguns parágrafos e subtítulos) e uma categoria (ex: "Dermatologia Clínica", "Cuidados com a Pele") para cada artigo.
    c. **Preencher o artigo:** Substitua os placeholders no novo arquivo pelo conteúdo gerado.

### Parte C: Desenvolvimento da Página de Listagem do Blog

1.  **Ler o arquivo:** Carregue o conteúdo de `blog/index.html`.
2.  **Limpar o conteúdo placeholder:** Remova qualquer estrutura de exemplo existente dentro da seção principal.
3.  **Implementar a grade de listagem:** Crie uma `div` container que usará CSS Grid ou Flexbox.
4.  **Popular a grade:** Para cada artigo de exemplo criado na Parte B:
    a. **Criar o card:** Adicione um elemento HTML (ex: `<div class="card card--blog-post">`) na grade.
    b. **Preencher o card:** Dentro do card, adicione um link (`<a>`) que aponta para o arquivo do artigo correspondente (ex: `artigo-exemplo-1.html`). Dentro do link, adicione a imagem de destaque (pode ser um placeholder), o título do artigo, a data e um excerto do texto.
5.  **Salvar as alterações:** Use `overwrite_file_with_block` para atualizar o arquivo `blog/index.html`.

### Parte D: Verificação de Navegação

1.  **Analisar `index.html`:** Verifique se o botão "Visite Nosso Blog" e os links dos cards de destaque do blog na página inicial apontam corretamente para `/blog/index.html`. Se não, corrija-os.
2.  **Analisar o cabeçalho:** Verifique se o item de menu "Blog" na navegação principal aponta para `/blog/index.html`.

Ao final deste PBI, a seção do blog estará funcional com conteúdo de exemplo, pronta para receber os textos finais.
