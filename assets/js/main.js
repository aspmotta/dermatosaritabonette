// Espera o conteúdo do DOM (Document Object Model) ser completamente carregado e parseado
document.addEventListener('DOMContentLoaded', function() {

    // Atualiza o ano no rodapé
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    // Funcionalidade do Menu Hambúrguer
    const hamburgerMenu = document.getElementById('hamburgerMenu'); // Pega o botão hambúrguer pelo ID
    const mainNav = document.getElementById('mainNav');             // Pega o container da navegação principal pelo ID

    // Verifica se ambos os elementos (botão hambúrguer e menu) existem na página
    if (hamburgerMenu && mainNav) {
        // Adiciona um "ouvinte de evento" para o clique no botão hambúrguer
        hamburgerMenu.addEventListener('click', function() {
            // Alterna a classe 'active' no menu principal (.main-nav)
            // A classe 'active' no CSS é usada para mostrar/esconder o menu e animar o ícone
            mainNav.classList.toggle('active');
            
            // Alterna a classe 'active' no próprio botão hambúrguer (para animar o ícone para 'X')
            hamburgerMenu.classList.toggle('active');

            // Atualiza os atributos ARIA para acessibilidade
            // Verifica se o menu está agora ativo (expandido)
            const isExpanded = mainNav.classList.contains('active');
            // Define 'aria-expanded' para true se o menu estiver ativo, ou false caso contrário
            hamburgerMenu.setAttribute('aria-expanded', isExpanded);
        });

        // Opcional: Fechar o menu se um link dentro dele for clicado (para Single Page Apps ou navegação na mesma página)
        // Para um site com múltiplas páginas como o seu, isso pode não ser estritamente necessário,
        // pois o carregamento de uma nova página naturalmente "fechará" o menu.
        // Mas pode ser útil se você tiver links âncora (#) na mesma página dentro do menu.
        const navLinks = mainNav.querySelectorAll('a.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    hamburgerMenu.classList.remove('active');
                    hamburgerMenu.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Opcional: Fechar o menu se o usuário clicar fora da área do menu em telas mobile
        document.addEventListener('click', function(event) {
            // Verifica se o menu está ativo e se o clique NÃO foi dentro do menu nem no botão hambúrguer
            if (mainNav.classList.contains('active')) {
                const isClickInsideNav = mainNav.contains(event.target);
                const isClickOnHamburger = hamburgerMenu.contains(event.target);

                if (!isClickInsideNav && !isClickOnHamburger) {
                    mainNav.classList.remove('active');
                    hamburgerMenu.classList.remove('active');
                    hamburgerMenu.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }

    // Em assets/js/main.js, dentro do DOMContentLoaded
    
    const blogCarousel = document.getElementById('blogCarousel');
    const blogCarouselControls = document.getElementById('blogCarouselControls');
    const blogCarouselDotsContainer = document.getElementById('blogCarouselDots');
    
    if (blogCarousel && blogCarouselControls && blogCarouselDotsContainer) {
        const items = Array.from(blogCarousel.querySelectorAll('.carousel-item'));
        const prevButton = blogCarouselControls.querySelector('.prev');
        const nextButton = blogCarouselControls.querySelector('.next');
        let currentIndex = 0;
        let itemWidth = 0; // Para calcular a posição de scroll
    
        function calculateItemWidth() {
            if (items.length > 0) {
                // Considera a largura do primeiro item visível.
                // O flex-basis + margin-right é o que define o "passo" do scroll.
                const itemStyle = window.getComputedStyle(items[0]);
                const itemClientWidth = items[0].getBoundingClientRect().width; // Largura real renderizada
                const marginRight = parseFloat(itemStyle.marginRight);
                itemWidth = itemClientWidth + marginRight;
            }
        }
    
        function updateCarouselVisibility() {
            if (window.innerWidth <= 768) { // Ativar carrossel apenas no mobile
                blogCarousel.style.display = 'flex';
                blogCarouselControls.style.display = 'flex';
                blogCarouselDotsContainer.style.display = 'flex';
                blogCarousel.style.overflowX = 'hidden'; // MUDAR DE VOLTA PARA HIDDEN
                calculateItemWidth(); // Calcular largura ao ativar
                updateDots();
                scrollToCurrentItem(); // Garante que o item certo está visível
            } else { // Desativar carrossel no desktop
                blogCarousel.style.display = 'grid';
                blogCarouselControls.style.display = 'none';
                blogCarouselDotsContainer.style.display = 'none';
                blogCarousel.style.overflowX = 'visible'; // Resetar overflow
                blogCarousel.scrollLeft = 0; // Resetar posição de scroll
                currentIndex = 0; // Resetar índice para desktop
            }
        }
    
        function scrollToCurrentItem() {
            if (items.length > 0 && itemWidth > 0) {
                // Não permite scroll além dos limites
                const maxScrollLeft = (items.length - 1) * itemWidth - (blogCarousel.clientWidth * 0.1); // 0.1 é 100% - 90% (flex-basis)
                const targetScrollLeft = Math.min(currentIndex * itemWidth, maxScrollLeft);
                blogCarousel.scrollTo({
                    left: targetScrollLeft,
                    behavior: 'smooth'
                });
            }
            updateButtonStates();
        }
    
        function showItem(index) {
            if (items.length === 0 || itemWidth === 0) return;
    
            const newIndex = Math.max(0, Math.min(index, items.length - 1));
            if (newIndex !== currentIndex) {
                currentIndex = newIndex;
                scrollToCurrentItem();
                updateDots();
            } else if (newIndex === 0 && index < 0) { // Edge case for prev on first item
                 currentIndex = 0; // Ensure it stays at 0
                 scrollToCurrentItem();
                 updateDots();
            } else if (newIndex === items.length - 1 && index >= items.length) { // Edge case for next on last item
                 currentIndex = items.length - 1; // Ensure it stays at last index
                 scrollToCurrentItem();
                 updateDots();
            }
        }
        
        function updateButtonStates() {
            if (!prevButton || !nextButton) return;
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex >= items.length - 1 || (items.length * 0.9 * itemWidth) <= blogCarousel.clientWidth ; 
            // A condição do nextButton pode ser mais complexa se o último item não preencher a tela.
            // Simplificando: desabilitar se o último item já estiver visível.
            // Para uma lógica mais precisa com flex-basis de 90%, o último item já é o último "snap point".
            nextButton.disabled = currentIndex >= items.length -1;
    
        }
    
    
        function createDots() {
            if (!blogCarouselDotsContainer) return;
            blogCarouselDotsContainer.innerHTML = '';
            items.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.classList.add('dot');
                dot.setAttribute('aria-label', `Ir para o post ${index + 1}`);
                if (index === currentIndex) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => showItem(index));
                blogCarouselDotsContainer.appendChild(dot);
            });
        }
    
        function updateDots() {
            if (!blogCarouselDotsContainer) return;
            const dots = blogCarouselDotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
    
        if (items.length > 0) {
            createDots();
            if (prevButton && nextButton) {
                prevButton.addEventListener('click', () => {
                    showItem(currentIndex - 1);
                });
    
                nextButton.addEventListener('click', () => {
                    showItem(currentIndex + 1);
                });
            }
            updateButtonStates(); // Set initial button states
        }
        
        // Inicialização e ouvinte de redimensionamento
        updateCarouselVisibility();
        window.addEventListener('resize', () => {
            // Recalcular e atualizar em resize é importante
            // Adicionar um debounce aqui seria ideal para performance em produção
            updateCarouselVisibility();
            if(window.innerWidth <= 768) {
                scrollToCurrentItem(); // Reajusta a posição do scroll
            }
        });
    
        // Lógica de Swipe (continua a mesma, mas agora chama showItem)
        let touchstartX = 0;
        let touchendX = 0;
    
        blogCarousel.addEventListener('touchstart', function(event) {
            touchstartX = event.changedTouches[0].screenX;
        }, { passive: true }); // passive: true para melhor performance de scroll
    
        blogCarousel.addEventListener('touchend', function(event) {
            touchendX = event.changedTouches[0].screenX;
            handleSwipe();
        }, false);
    
        function handleSwipe() {
            if (window.innerWidth <= 768) {
                const swipeThreshold = 50; // Mínimo de pixels para considerar um swipe
                if (touchendX < touchstartX - swipeThreshold) {
                    showItem(currentIndex + 1);
                }
                if (touchendX > touchstartX + swipeThreshold) {
                    showItem(currentIndex - 1);
                }
            }
        }
    
    } // Fim do if (blogCarousel)


    // ---------------------------------------------------------------------------------
    // Outras funcionalidades JavaScript podem ser adicionadas aqui abaixo:
    // - Smooth scroll para links âncora (ex: "contato.html#agendamento")
    // - Configuração do Google Analytics 4
    // - Funcionalidade do banner de cookies
    // - Validações de formulário (se não usar apenas a validação HTML5)
    // ---------------------------------------------------------------------------------

});