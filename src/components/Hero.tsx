import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import './Hero.css';

interface SlideData {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  primaryBtn: string;
  outlineBtn: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    tag: 'Welcome to Royal Bath',
    title: 'Luxury Tiles & Sanitary Ware',
    subtitle: 'Discover our exclusive collection of premium tiles and sanitary solutions for your dream space.',
    image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?w=1920&q=80',
    primaryBtn: 'Explore Collection',
    outlineBtn: 'View Catalog'
  },
  {
    id: 2,
    tag: 'Natural Beauty',
    title: 'Premium Marble & Granite',
    subtitle: 'Experience the timeless elegance of natural stone sourced from the finest quarries worldwide.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1920&q=80',
    primaryBtn: 'View Marble',
    outlineBtn: 'View Granite'
  },
  {
    id: 3,
    tag: 'Contemporary Design',
    title: 'Modern Bathroom Solutions',
    subtitle: 'Transform your bathroom with our cutting-edge designs and innovative sanitary products.',
    image: 'https://images.unsplash.com/photo-1552321901-bc7b5e163e25?w=1920&q=80',
    primaryBtn: 'Get Inspired',
    outlineBtn: 'Contact Us'
  }
];

interface HeroProps {
  onSlideChange?: (index: number) => void;
}

export default function Hero({ onSlideChange }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial slide animation - wait for DOM to be ready
    const timer = setTimeout(() => {
      animateSlide(0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const animateSlide = (index: number) => {
    const elements = document.querySelectorAll(`[data-slide="${index}"]`);
    
    if (elements.length === 0) return;

    // Kill any existing tweens on these elements
    gsap.killTweensOf(elements);
    
    // Reset state
    gsap.set(elements, { opacity: 0, y: 30 });
    
    // Create new animation
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      clearProps: 'all'
    });
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length;
      onSlideChange?.(next);
      return next;
    });
  }, [onSlideChange]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = (prev - 1 + slides.length) % slides.length;
      onSlideChange?.(next);
      return next;
    });
  }, [onSlideChange]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      animateSlide(currentSlide);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="hero" ref={sliderRef}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          data-slide={index}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <span className="hero-tag" data-slide={index}>{slide.tag}</span>
            <h1 className="hero-title" data-slide={index}>{slide.title}</h1>
            <p className="hero-subtitle" data-slide={index}>{slide.subtitle}</p>
            <div className="hero-buttons" data-slide={index}>
              <button className="btn btn-primary">{slide.primaryBtn}</button>
              <button className="btn btn-outline">{slide.outlineBtn}</button>
            </div>
          </div>
        </div>
      ))}

      <button 
        className="hero-nav prev desktop-only" 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        className="hero-nav next desktop-only" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => {
              setCurrentSlide(index);
              onSlideChange?.(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="scroll-indicator desktop-only">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
