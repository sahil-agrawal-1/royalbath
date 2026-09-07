import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Collections.css';

gsap.registerPlugin(ScrollTrigger);

interface Collection {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

const collections: Collection[] = [
  {
    id: 1,
    title: 'Premium Tiles',
    description: 'Exquisite ceramic and porcelain tiles for every space',
    image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?w=600&q=80',
    icon: '🏛️'
  },
  {
    id: 2,
    title: 'Sanitary Ware',
    description: 'Modern bathroom fixtures and sanitary solutions',
    image: 'https://images.unsplash.com/photo-1552321901-bc7b5e163e25?w=600&q=80',
    icon: '🚿'
  },
  {
    id: 3,
    title: 'Natural Marble',
    description: 'Luxurious marble slabs from renowned quarries',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&q=80',
    icon: '💎'
  },
  {
    id: 4,
    title: 'Granite Collection',
    description: 'Durable and elegant granite for countertops and flooring',
    image: 'https://images.unsplash.com/photo-1600585152220-35f59108032b?w=600&q=80',
    icon: '🪨'
  }
];

export default function Collections() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="collections" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Collections</span>
          <h2 className="section-title">Explore Our Premium Range</h2>
          <p className="section-subtitle">
            Discover our curated selection of luxury materials for your dream spaces
          </p>
        </div>

        <div className="collections-grid">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="collection-card"
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <div className="collection-image">
                <img src={collection.image} alt={collection.title} loading="lazy" />
                <div className="collection-overlay"></div>
              </div>
              <div className="collection-content">
                <span className="collection-icon">{collection.icon}</span>
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
                <button className="btn-link">
                  Explore
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
