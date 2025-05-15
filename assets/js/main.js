// assets/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mainNav = document.getElementById('mainNav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');

            // Atualiza atributos ARIA para acessibilidade
            const isExpanded = mainNav.classList.contains('active');
            hamburgerMenu.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Opcional: Fechar o menu se clicar fora dele em mobile
    document.addEventListener('click', function(event) {
        if (mainNav && mainNav.classList.contains('active')) {
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnHamburger = hamburgerMenu.contains(event.target);

            if (!isClickInsideNav && !isClickOnHamburger) {
                mainNav.classList.remove('active');
                hamburgerMenu.classList.remove('active');
                hamburgerMenu.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // Adicione aqui outras funcionalidades JS: smooth scroll, analytics, etc.
});
