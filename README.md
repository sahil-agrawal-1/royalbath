# Royal Bath - Luxury Tiles & Sanitary Showcase (React)

A luxury, minimalist React website for showcasing tiles, sanitary ware, marble & granite products with stunning GSAP animations.

## 🚀 Features

- **React 18 + TypeScript** - Modern component architecture
- **GSAP Animations** - Smooth scroll-triggered animations and hero slider
- **Responsive Design** - Mobile-first approach with breakpoints
- **Component-Based** - Reusable Hero, Collections, Products components
- **Performance Optimized** - Lazy loading, code splitting ready
- **Modern Styling** - CSS variables, clamp() for responsive typography

## 📦 Tech Stack

- React 18
- TypeScript
- Vite (Build tool)
- GSAP (Animations)
- CSS Modules

## 🛠️ Installation

```bash
cd royalbath-react
npm install
```

## 🏃 Development

```bash
npm run dev
```

Visit `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Hero slider with GSAP animations
│   ├── Hero.css
│   ├── Collections.tsx   # Product collections grid
│   └── Collections.css
├── App.tsx               # Main app component
├── App.css               # Global styles
├── index.css             # Base styles
└── main.tsx              # Entry point
```

## 🎨 Customization

### Colors (in App.css)
```css
--color-primary: #1a1a1a;
--color-gold: #c9a962;
--color-brown: #8b7355;
```

### Add New Sections
1. Create component in `src/components/`
2. Import in `App.tsx`
3. Add to JSX

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: < 768px
- Desktop: ≥ 768px

## 🚢 Build for Production

```bash
npm run build
npm run preview
```

## 📄 License

MIT License
