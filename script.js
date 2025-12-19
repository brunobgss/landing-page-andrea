// ============================================
// PREMIUM LANDING PAGE - JAVASCRIPT
// ============================================

(function() {
    'use strict';

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    const header = document.getElementById('header');
    let lastScroll = 0;

    function handleHeaderScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll(); // Initial check

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href !== '') {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ============================================
    // FAQ TOGGLE FUNCTIONALITY
    // ============================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ============================================
    // SCROLL ANIMATIONS (AOS - Animate On Scroll)
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with data-aos attribute
    const animateElements = document.querySelectorAll('[data-aos]');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // ============================================
    // PARALLAX EFFECT FOR HERO
    // ============================================
    const hero = document.getElementById('hero');
    const heroShapes = document.querySelectorAll('.shape');
    
    function handleParallax() {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
            heroShapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                const yPos = -(scrolled * speed);
                shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
            });
        }
    }
    
    window.addEventListener('scroll', handleParallax);

    // ============================================
    // VIDEO PLACEHOLDER CLICK HANDLER
    // ============================================
    // CONFIGURAÇÃO DO VÍDEO
    // Escolha uma das opções abaixo:
    
    // OPÇÃO 1: YouTube (Recomendado)
    // Substitua 'SEU_VIDEO_ID' pelo ID do vídeo do YouTube
    // Exemplo: se o link é https://www.youtube.com/watch?v=abc123, use 'abc123'
    const VIDEO_YOUTUBE_ID = 'LCJyPd1c6_s'; // ✅ Vídeo configurado
    
    // OPÇÃO 2: Vimeo
    // const VIDEO_VIMEO_ID = 'SEU_VIDEO_ID'; // Descomente e use se for Vimeo
    
    // OPÇÃO 3: Vídeo direto (MP4, WebM, etc)
    // const VIDEO_DIRECT_URL = 'https://seu-dominio.com/video.mp4'; // Descomente e use se for vídeo direto
    
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const videoEmbed = document.getElementById('videoEmbed');
    const playButton = document.getElementById('playButton');
    
    if (videoPlaceholder && videoEmbed) {
        // Função para carregar vídeo do YouTube
        function loadYouTubeVideo(videoId) {
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.border = 'none';
            iframe.style.borderRadius = '20px';
            
            videoEmbed.appendChild(iframe);
            videoPlaceholder.style.display = 'none';
            videoEmbed.style.display = 'block';
        }
        
        // Função para carregar vídeo do Vimeo
        function loadVimeoVideo(videoId) {
            const iframe = document.createElement('iframe');
            iframe.src = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
            iframe.allow = 'autoplay; fullscreen; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.border = 'none';
            iframe.style.borderRadius = '20px';
            
            videoEmbed.appendChild(iframe);
            videoPlaceholder.style.display = 'none';
            videoEmbed.style.display = 'block';
        }
        
        // Função para carregar vídeo direto
        function loadDirectVideo(videoUrl) {
            const video = document.createElement('video');
            video.src = videoUrl;
            video.controls = true;
            video.autoplay = true;
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'cover';
            video.style.borderRadius = '20px';
            
            videoEmbed.appendChild(video);
            videoPlaceholder.style.display = 'none';
            videoEmbed.style.display = 'block';
        }
        
        // Event listener para o clique
        videoPlaceholder.addEventListener('click', function() {
            if (VIDEO_YOUTUBE_ID && VIDEO_YOUTUBE_ID !== 'SEU_VIDEO_ID') {
                loadYouTubeVideo(VIDEO_YOUTUBE_ID);
            }
            // Descomente uma das opções abaixo se usar Vimeo ou vídeo direto:
            // else if (VIDEO_VIMEO_ID) {
            //     loadVimeoVideo(VIDEO_VIMEO_ID);
            // }
            // else if (VIDEO_DIRECT_URL) {
            //     loadDirectVideo(VIDEO_DIRECT_URL);
            // }
        });
        
        playButton.addEventListener('click', function(e) {
            e.stopPropagation();
            if (VIDEO_YOUTUBE_ID && VIDEO_YOUTUBE_ID !== 'SEU_VIDEO_ID') {
                loadYouTubeVideo(VIDEO_YOUTUBE_ID);
            }
        });
    }

    // ============================================
    // COUNTER ANIMATION FOR STATS
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(element) {
        const target = element.textContent.replace(/\D/g, '');
        const suffix = element.textContent.replace(/\d/g, '');
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    }
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // ============================================
    // CURSOR EFFECT (Optional Premium Touch)
    // ============================================
    let cursor = null;
    
    function createCursor() {
        cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            width: 20px;
            height: 20px;
            border: 2px solid var(--primary-purple);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            display: none;
        `;
        document.body.appendChild(cursor);
    }
    
    // Uncomment to enable custom cursor (optional)
    // createCursor();
    
    // if (cursor) {
    //     document.addEventListener('mousemove', (e) => {
    //         cursor.style.left = e.clientX - 10 + 'px';
    //         cursor.style.top = e.clientY - 10 + 'px';
    //         cursor.style.display = 'block';
    //     });
    //     
    //     document.querySelectorAll('a, button').forEach(el => {
    //         el.addEventListener('mouseenter', () => {
    //             cursor.style.transform = 'scale(1.5)';
    //         });
    //         el.addEventListener('mouseleave', () => {
    //             cursor.style.transform = 'scale(1)';
    //         });
    //     });
    // }

    // ============================================
    // LAZY LOADING FOR IMAGES (When added)
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // FORM VALIDATION (For checkout)
    // ============================================
    function validateCheckout() {
        // Esta função será usada quando o gateway de pagamento for integrado
        return true;
    }

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    function formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    // ============================================
    // SCROLL TO TOP BUTTON (Optional)
    // ============================================
    function createScrollToTop() {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '↑';
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 24px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--gradient-primary);
            color: white;
            border: none;
            cursor: pointer;
            font-size: 24px;
            z-index: 998;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        `;
        
        document.body.appendChild(scrollBtn);
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
            }
        });
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Uncomment to enable scroll to top button
    // createScrollToTop();

    // ============================================
    // PERFORMANCE OPTIMIZATION
    // ============================================
    // Throttle function for scroll events
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply throttle to scroll events
    window.addEventListener('scroll', throttle(handleParallax, 10));
    window.addEventListener('scroll', throttle(handleHeaderScroll, 10));

    // ============================================
    // MOBILE MENU (If needed in future)
    // ============================================
    function initMobileMenu() {
        // This can be expanded if a mobile menu is needed
        const nav = document.querySelector('.nav');
        if (window.innerWidth <= 768) {
            // Mobile menu logic can be added here
        }
    }
    
    window.addEventListener('resize', initMobileMenu);
    initMobileMenu();

    // ============================================
    // CONSOLE MESSAGE
    // ============================================
    console.log('%c🌿 NaturezaSemGotas', 'font-size: 20px; color: #7FB069; font-weight: bold;');
    console.log('%cLanding Page Premium - Ultra Detox 21', 'font-size: 14px; color: #8B6F9E;');
    console.log('%cDesenvolvido com ❤️ para Andréa Oliveira Souza', 'font-size: 12px; color: #666;');

})();
