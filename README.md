# Royal Bath - Luxury Tiles & Sanitary Showcase Website

A premium, minimalist luxury website for showcasing tiles, sanitary ware, marble, and granite products. Built with performance optimization, smooth animations, and exceptional user experience in mind.

![Royal Bath](https://img.shields.io/badge/Version-1.0.0-gold)
![License](https://img.shields.io/badge/License-MIT-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.12-green)

## ✨ Features

### Design & UX
- **Luxury Minimalist Aesthetic** - Clean, sophisticated design with elegant typography
- **Smooth Animations** - GSAP-powered scroll-triggered animations and micro-interactions
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Contrast** - Elegant color palette with gold accents

### Performance Optimizations
- **Lazy Loading Images** - IntersectionObserver for efficient image loading
- **Optimized CSS** - CSS variables, minimal specificity, efficient selectors
- **Debounced/Throttled Events** - Performance-conscious event handling
- **Reduced Motion Support** - Respects user's motion preferences
- **Print Styles** - Optimized for printing

### Interactive Elements
- **Hero Slider** - Auto-playing carousel with navigation controls
- **Product Filtering** - Animated category filtering system
- **Counter Animation** - Dynamic statistics counter
- **Testimonials Slider** - Client testimonials carousel
- **Form Validation** - Contact and newsletter forms with feedback
- **Mobile Navigation** - Hamburger menu with smooth transitions

### Sections
1. **Hero** - Full-screen slider with captivating imagery
2. **Collections** - Product categories showcase
3. **Products** - Filterable product grid with hover effects
4. **About** - Company story with animated statistics
5. **Testimonials** - Client reviews carousel
6. **Contact** - Contact form and showroom information
7. **Footer** - Newsletter signup and social links

## 🚀 Quick Start

### Option 1: Direct Open
Simply open `index.html` in your web browser.

### Option 2: Local Server (Recommended)
For the best experience, use a local development server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## 📁 Project Structure

```
/workspace
├── index.html          # Main HTML file
├── README.md           # Documentation
├── css/
│   └── styles.css      # All styles (1100+ lines)
├── js/
│   └── main.js         # JavaScript with GSAP animations
└── images/             # Image assets directory
```

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Black | `#1a1a1a` | Main text, backgrounds |
| Secondary Brown | `#8b7355` | Accents, highlights |
| Gold Accent | `#c9a962` | CTAs, decorative elements |
| White | `#ffffff` | Backgrounds, text on dark |
| Light Gray | `#f8f7f5` | Alternate backgrounds |

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with variables, Grid, Flexbox
- **JavaScript (ES6+)** - Vanilla JS, no framework dependencies
- **GSAP 3.12** - Professional animation library
- **ScrollTrigger** - Scroll-based animations plugin
- **Google Fonts** - Playfair Display & Inter

## 🎯 Key Features Explained

### Loader Animation
Elegant loading screen with logo reveal and progress line animation.

### Hero Slider
- Auto-plays every 6 seconds
- Pause on hover
- Manual navigation with arrows and dots
- Smooth content animations on slide change

### Product Filter
Click category tabs to filter products with smooth scale and fade animations.

### Scroll Animations
- Fade-in and fade-up elements triggered by scroll position
- Parallax effect on about section images
- Staggered card animations
- Counter animation for statistics

### Micro-interactions
- Button hover states with color transitions
- Card image zoom on hover
- Navigation underline animation
- Form field label floating
- Action buttons slide-in on product cards

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Reduced motion media query support
- High contrast color scheme
- Focus states on all interactive elements

## ⚡ Performance Tips

1. **Image Optimization**: Replace Unsplash URLs with optimized WebP images
2. **CDN**: GSAP is loaded from CDN for better caching
3. **Critical CSS**: Consider inlining critical CSS for faster first paint
4. **Preconnect**: External resources use preconnect hints

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization

### Change Colors
Edit CSS variables in `css/styles.css`:

```css
:root {
    --color-primary: #1a1a1a;
    --color-secondary: #8b7355;
    --color-accent: #c9a962;
    /* ... */
}
```

### Update Content
Modify text content directly in `index.html`.

### Add Products
Copy existing product card structure and update details:

```html
<div class="product-card" data-category="tiles">
    <!-- content -->
</div>
```

### Modify Animations
Adjust GSAP parameters in `js/main.js`:

```javascript
gsap.to(element, {
    duration: 1,      // Change animation speed
    ease: 'power2.out' // Change easing
});
```

## 📄 License

MIT License - Feel free to use this template for personal or commercial projects.

## 👨‍💻 Author

Created with ❤️ for luxury brands showcasing premium products.

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) for the animation library
- [Unsplash](https://unsplash.com/) for beautiful product imagery
- [Google Fonts](https://fonts.google.com/) for typography

---

**Enjoy building your luxury showcase!** ✨