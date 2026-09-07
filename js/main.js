/**
 * Royal Bath - Luxury Showcase Website
 * Main JavaScript File
 * 
 * Features:
 * - GSAP animations with ScrollTrigger
 * - Hero slider functionality
 * - Product filtering
 * - Navigation interactions
 * - Form handling
 * - Performance optimizations
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', () => {
        // Initialize all modules
        initLoader();
        initNavigation();
        initHeroSlider();
        initScrollAnimations();
        initProductFilter();
        initCounterAnimation();
        initTestimonialsSlider();
        initForms();
        initLazyLoading();
    });

    /**
     * Loading Screen Animation
     */
    function initLoader() {
        const loader = document.getElementById('loader');
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                gsap.to(loader, {
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        loader.style.display = 'none';
                        initHeroAnimations();
                    }
                });
            }, 1500);
        });
    }

    /**
     * Navigation Functionality
     */
    function initNavigation() {
        const navbar = document.getElementById('navbar');
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });

        // Mobile menu toggle
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                // Update active state
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    /**
     * Hero Slider with Auto-play
     */
    function initHeroSlider() {
        const slides = document.querySelectorAll('.hero-slide');
        const dotsContainer = document.getElementById('heroDots');
        const prevBtn = document.getElementById('heroPrev');
        const nextBtn = document.getElementById('heroNext');
        
        let currentSlide = 0;
        let slideInterval;

        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('hero-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.hero-dot');

        function updateSlides() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active');
                dots[index].classList.remove('active');
                
                if (index === currentSlide) {
                    slide.classList.add('active');
                    dots[index].classList.add('active');
                    
                    // Animate content
                    animateHeroContent(slide);
                }
            });
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlides();
            resetInterval();
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlides();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlides();
        }

        function startInterval() {
            slideInterval = setInterval(nextSlide, 6000);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        // Event listeners
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        // Pause on hover
        const hero = document.querySelector('.hero');
        hero.addEventListener('mouseenter', () => clearInterval(slideInterval));
        hero.addEventListener('mouseleave', startInterval);

        // Initialize
        startInterval();
    }

    /**
     * Hero Content Animations
     */
    function initHeroAnimations() {
        const activeSlide = document.querySelector('.hero-slide.active');
        animateHeroContent(activeSlide);
    }

    function animateHeroContent(slide) {
        const title = slide.querySelector('.hero-title');
        const subtitle = slide.querySelector('.hero-subtitle');
        const btn = slide.querySelector('.btn');

        // Reset animations
        gsap.set([title, subtitle, btn], { clearProps: 'all' });

        const tl = gsap.timeline();
        
        tl.from(title, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .from(subtitle, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-0.4')
        .from(btn, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-0.4');
    }

    /**
     * GSAP Scroll Animations
     */
    function initScrollAnimations() {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Fade in elements
        gsap.utils.toArray('.fade-in').forEach(element => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            });
        });

        // Fade up elements
        gsap.utils.toArray('.fade-up').forEach(element => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out'
            });
        });

        // Split text animation for titles
        gsap.utils.toArray('.split-text').forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power4.out'
            });
        });

        // Collection cards stagger
        gsap.from('.collection-card', {
            scrollTrigger: {
                trigger: '.collections-grid',
                start: 'top 80%'
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        });

        // Product cards stagger
        gsap.from('.product-card', {
            scrollTrigger: {
                trigger: '.products-grid',
                start: 'top 80%'
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
        });

        // About images parallax
        gsap.to('.about-img-main img', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            y: -30,
            ease: 'none'
        });

        gsap.to('.about-img-secondary img', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            y: -50,
            ease: 'none'
        });
    }

    /**
     * Product Filter Functionality
     */
    function initProductFilter() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        const productCards = document.querySelectorAll('.product-card');

        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const filter = tab.dataset.filter;

                // Filter products with animation
                productCards.forEach(card => {
                    const category = card.dataset.category;
                    
                    if (filter === 'all' || category === filter) {
                        card.classList.remove('hidden');
                        gsap.to(card, {
                            scale: 1,
                            opacity: 1,
                            duration: 0.4,
                            ease: 'back.out(1.7)'
                        });
                    } else {
                        gsap.to(card, {
                            scale: 0.9,
                            opacity: 0,
                            duration: 0.3,
                            ease: 'power2.in',
                            onComplete: () => {
                                card.classList.add('hidden');
                            }
                        });
                    }
                });
            });
        });
    }

    /**
     * Counter Animation for Stats
     */
    function initCounterAnimation() {
        const counters = document.querySelectorAll('.stat-number');

        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            
            gsap.to(counter, {
                scrollTrigger: {
                    trigger: counter,
                    start: 'top 85%',
                    once: true
                },
                innerHTML: target,
                duration: 2,
                ease: 'power2.out',
                snap: { innerHTML: 1 },
                onUpdate: function() {
                    counter.innerHTML = Math.round(this.targets()[0].innerHTML);
                }
            });
        });
    }

    /**
     * Testimonials Slider
     */
    function initTestimonialsSlider() {
        const testimonials = document.querySelectorAll('.testimonial-card');
        const prevBtn = document.getElementById('testiPrev');
        const nextBtn = document.getElementById('testiNext');
        
        let currentIndex = 0;

        function showTestimonial(index) {
            testimonials.forEach((card, i) => {
                gsap.to(card, {
                    x: (i - index) * 100 + '%',
                    opacity: i === index ? 1 : 0.3,
                    duration: 0.6,
                    ease: 'power3.inOut',
                    display: i === index ? 'block' : 'none'
                });
            });
        }

        function nextTestimonial() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }

        function prevTestimonial() {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        }

        prevBtn.addEventListener('click', () => {
            prevTestimonial();
        });

        nextBtn.addEventListener('click', () => {
            nextTestimonial();
        });

        // Initialize
        showTestimonial(0);

        // Auto-play
        setInterval(nextTestimonial, 5000);
    }

    /**
     * Form Handling
     */
    function initForms() {
        // Contact form
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(contactForm);
                const data = Object.fromEntries(formData);
                
                // Simulate form submission
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<span>Sending...</span>';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.innerHTML = '<span>Message Sent!</span>';
                    submitBtn.style.background = '#4CAF50';
                    submitBtn.style.borderColor = '#4CAF50';
                    
                    setTimeout(() => {
                        contactForm.reset();
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        submitBtn.style.borderColor = '';
                    }, 2000);
                }, 1500);
            });
        }

        // Newsletter form
        const newsletterForm = document.getElementById('newsletterForm');
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const input = newsletterForm.querySelector('input');
                const button = newsletterForm.querySelector('button');
                
                button.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                `;
                button.style.background = '#4CAF50';
                
                setTimeout(() => {
                    input.value = '';
                    button.innerHTML = `
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"/>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                    `;
                    button.style.background = '';
                }, 2000);
            });
        }
    }

    /**
     * Lazy Loading Images
     */
    function initLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px'
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    /**
     * Performance: Debounce function
     */
    function debounce(func, wait) {
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

    /**
     * Performance: Throttle function
     */
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

})();
