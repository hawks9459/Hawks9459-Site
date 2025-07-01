document.addEventListener('DOMContentLoaded', function () {
    // Verifica se AOS existe antes de inicializar
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-in-out'
        });
    }

    // Inicialização do Swiper
    if (typeof Swiper !== 'undefined') {
        const sponsorsSwiper = new Swiper('.sponsorsSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                }
            }
        });
    }

    // Rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Botão de voltar ao topo
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });



    // Menu sanduíche
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }


    //index-carrossel
    const fundo = document.querySelector('.fundo-suave');
    const hero = document.getElementById('hero');

    if (fundo && hero) {
        const backgrounds = [
            "assets/wallpapers/wallpaper.png",
            "assets/wallpapers/wallpaper2.jpeg",
            "assets/wallpapers/wallpaper5.jpeg"
        ];

        let indexAtual = 0;

        function atualizarFundo() {
            fundo.style.opacity = 0;
            setTimeout(() => {
                fundo.style.backgroundImage = `url('${backgrounds[indexAtual]}')`;
                fundo.style.opacity = 1;
            }, 300);
        }

        document.querySelector('.carousel-btn-prev').addEventListener("click", () => {
            indexAtual = (indexAtual - 1 + backgrounds.length) % backgrounds.length;
            atualizarFundo();
        });

        document.querySelector('.carousel-btn-next').addEventListener("click", () => {
            indexAtual = (indexAtual + 1) % backgrounds.length;
            atualizarFundo();
        });

        atualizarFundo();

        setInterval(() => {
            indexAtual = (indexAtual + 1) % backgrounds.length;
            atualizarFundo();
        }, 5000);
    }


    //Galeria
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    const images = Array.from(document.querySelectorAll('.zoomable'));
    let currentIndex = 0;

    function showImage(index) {
        if (index >= 0 && index < images.length) {
            lightboxImg.src = images[index].src;
            currentIndex = index;
        }
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            showImage(index);
            lightbox.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', (e) => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const nextIndex = (currentIndex + 1) % images.length;
        showImage(nextIndex);
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(prevIndex);
    });

});