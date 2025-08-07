# Plano de Execução - PBI-05: Otimização de Todas as Imagens

**Objetivo:** Realizar uma otimização completa de todos os ativos de imagem do site. Isso envolve auditar, comprimir, converter para formatos modernos (WebP) e implementar o carregamento responsivo (`srcset`), com o objetivo de reduzir drasticamente o tempo de carregamento das páginas.

---

## 1. Escopo

- **Diretórios de Imagens:** `/assets/images/`
- **Diretórios a serem removidos:** `optimized_images/`, `optimized_images_batch_1.zip`, `optimized_images_batch_2/`, `optimized_images_batch_2.zip`, `optimized_images_batch_3/`, `optimized_images_batch_3.zip`.
- **Arquivos a serem modificados:** Todos os arquivos `.html` que contêm tags `<img>`.

---

## 2. Requisitos Técnicos

- **Formato Final:** WebP para todas as imagens, com fallback para o formato original (JPG/PNG).
- **Compressão:** A qualidade do WebP deve ser configurada para `80` para um bom equilíbrio entre tamanho e qualidade visual.
- **Carregamento Responsivo (`srcset`):** Imagens de layout principal (heros, banners de seção) devem ter múltiplas versões de largura (ex: 400w, 800w, 1200w) para otimizar o carregamento em diferentes telas.
- **Estrutura HTML:** Todas as imagens devem ser implementadas usando o elemento `<picture>` para garantir o fallback para navegadores que não suportam WebP.
- **Limpeza:** O repositório deve conter apenas os assets finais. Todos os diretórios de otimização intermediários e arquivos zip devem ser removidos.

---

## 3. Detalhamento das Tarefas (Instruções para Agente)

### Parte A: Preparação e Limpeza

1.  **Instalar Dependências:** Execute `npm install` no terminal para garantir que a biblioteca `sharp` e outras dependências dos scripts estejam disponíveis.
2.  **Remover Diretórios Antigos:** Execute os seguintes comandos `rm -rf` para limpar os artefatos de otimizações anteriores:
    ```bash
    rm -rf optimized_images
    rm -f optimized_images_batch_1.zip
    rm -rf optimized_images_batch_2
    rm -f optimized_images_batch_2.zip
    rm -rf optimized_images_batch_3
    rm -f optimized_images_batch_3.zip
    ```
3.  **Auditar Imagens Atuais:** Gere uma lista de todos os arquivos `.jpg`, `.jpeg` e `.png` dentro de `/assets/images/`.

### Parte B: Otimização Automatizada

1.  **Analisar Scripts Existentes:** Revise os scripts `resize-images.js` e `resize-script.js`. Eles parecem ser a base para a automação.
2.  **Adaptar ou Criar Script:**
    - **Objetivo do Script:** O script deve:
        a. Ler todos os arquivos de imagem da lista de auditoria.
        b. Para cada imagem, gerar uma versão `.webp` com qualidade `80`.
        c. Para imagens designadas como "grandes", gerar também as versões redimensionadas (400w, 800w, 1200w) em formato WebP.
        d. Salvar todos os novos arquivos no mesmo diretório `/assets/images/`.
    - **Execução:** Execute o script de otimização.

### Parte C: Atualização do HTML

Esta é a parte mais crítica e requer modificações em muitos arquivos.

1.  **Identificar Alvos:** Use `grep "src=" **/*.html"` para encontrar todas as ocorrências de imagens nos arquivos HTML.
2.  **Iterar e Substituir:** Para cada imagem encontrada:
    a. **Localizar a tag `<img>`:** Ex: `<img src="/assets/images/dra-sarita.jpg" alt="...">`.
    b. **Substituir por `<picture>`:** Converta a tag `<img>` para a estrutura `<picture>`.
    c. **Implementar `srcset` (se aplicável):** Se for uma imagem com múltiplos tamanhos, o `srcset` deve ser usado.

    **Exemplo de Substituição (Imagem Simples):**
    ```html
    <!-- ANTES -->
    <img src="/assets/images/firmeza-contorno.png" alt="Rosto com contorno definido e pele firme">

    <!-- DEPOIS -->
    <picture>
      <source srcset="/assets/images/firmeza-contorno.webp" type="image/webp">
      <source srcset="/assets/images/firmeza-contorno.png" type="image/png">
      <img src="/assets/images/firmeza-contorno.png" alt="Rosto com contorno definido e pele firme">
    </picture>
    ```

    **Exemplo de Substituição (Imagem Responsiva com `srcset`):**
    ```html
    <!-- ANTES (exemplo simplificado) -->
    <img src="/assets/images/sarita-sobre-mim-800w.webp" alt="Dra. Sarita Bonette, Dermatologista">

    <!-- DEPOIS -->
    <picture>
      <source srcset="/assets/images/sarita-sobre-mim-400w.webp 400w, /assets/images/sarita-sobre-mim-800w.webp 800w, /assets/images/sarita-sobre-mim-1200w.webp 1200w" sizes="(max-width: 600px) 400px, 800px" type="image/webp">
      <source srcset="/assets/images/sarita-sobre-mim-400w.jpg 400w, /assets/images/sarita-sobre-mim-800w.jpg 800w, /assets/images/sarita-sobre-mim-1200w.jpg 1200w" sizes="(max-width: 600px) 400px, 800px" type="image/jpeg">
      <img src="/assets/images/sarita-sobre-mim-800w.jpg" alt="Dra. Sarita Bonette, Dermatologista">
    </picture>
    ```

### Parte D: Verificação Final

1.  **Revisão Visual:** Abra as páginas principais do site (`index.html`, `sobre.html`, etc.) em um navegador e verifique se todas as imagens carregam corretamente.
2.  **Verificação no DevTools:** Abra as "Ferramentas de Desenvolvedor" do navegador, vá para a aba "Network" e recarregue a página (com o cache desativado). Verifique se os arquivos de imagem que estão sendo baixados são do tipo `webp`.
3.  **Teste em Navegador sem Suporte:** Se possível, teste em um navegador mais antigo (como o IE11, ou usando uma ferramenta de simulação) para garantir que as imagens de fallback (JPG/PNG) estão sendo carregadas.
