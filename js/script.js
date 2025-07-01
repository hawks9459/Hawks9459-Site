// Menu Sanduíche
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const overlay = document.querySelector('.overlay');
    
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Fechar menu ao redimensionar a tela para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Animação de entrada dos elementos quando aparecem na tela
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar cards e seções
    document.querySelectorAll('.join-card, .about-section, .join-section').forEach((el) => {
        observer.observe(el);
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Adicionar classe active ao menu quando scrollar
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Função para rolagem suave até a seção
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os logos divisores
    const dividerLogos = document.querySelectorAll('.divider-logo');
    
    dividerLogos.forEach(logo => {
        logo.addEventListener('click', function() {
            const targetId = this.getAttribute('data-scroll-to');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Calcula a posição da seção
                const targetPosition = targetSection.offsetTop;
                
                // Rola até a seção
                window.scrollTo({
                    top: targetPosition - 100, // -100 para compensar o header fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Adiciona título ao hover
document.querySelectorAll('.divider-logo').forEach(logo => {
    logo.setAttribute('title', 'Clique para rolar até a próxima seção');
});

// Log para debug
console.log('Script carregado');
console.log('Logos encontrados:', document.querySelectorAll('.divider-logo').length); 