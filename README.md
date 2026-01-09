# React Portfolio - Shuva Kumar Nath

A modern, production-ready React.js portfolio website featuring glassmorphism design, advanced animations, and responsive layout.

## 🚀 Features

- **Modern React Architecture**: Built with functional components and hooks
- **Advanced Animations**: 
  - Framer Motion for hover effects and component transitions
  - GSAP for scroll-triggered animations and complex sequences
- **Smooth Scrolling**: Implemented with Lenis for buttery-smooth navigation
- **Glassmorphism Design**: Beautiful glass-like cards and effects
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dynamic Navigation**: Active section highlighting and smooth scrolling
- **Interactive Components**: Hover effects, animated buttons, and form interactions
- **Production Ready**: Optimized build process and clean code structure

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **GSAP** - Professional-grade animation library
- **Lenis** - Smooth scrolling library
- **ESLint** - Code quality and consistency tool

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section with skill animations
│   ├── BackgroundEffects.jsx # Animated background elements
│   ├── Contact.jsx        # Contact form with validation
│   ├── Footer.jsx         # Footer with social links
│   ├── Hero.jsx           # Hero section with GSAP animations
│   ├── Navbar.jsx         # Navigation with active section tracking
│   ├── ProjectCard.jsx    # Reusable project card component
│   └── Work.jsx           # Projects showcase section
├── data/
│   └── projects.js        # Project data configuration
├── hooks/
│   ├── useActiveSection.js # Hook for tracking active navigation section
│   └── useSmoothScroll.js  # Hook for Lenis smooth scrolling
├── App.jsx               # Main application component
├── index.js              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎨 Customization

### Personal Information
Update your personal details in:
- `src/components/Hero.jsx` - Name, title, description, and profile image
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Social media links

### Projects
Modify your projects in `src/data/projects.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    techStack: ["React", "Node.js", "MongoDB"],
    image: "path/to/your/image.jpg",
    githubLink: "https://github.com/yourusername/project",
    liveLink: "https://yourproject.com",
    featured: true,
    order: 1
  }
];
```

### Styling
- Colors and theme: `tailwind.config.js`
- Custom CSS: `src/index.css`
- Component-specific styles: Individual component files

### Animations
- GSAP animations: Located in component `useEffect` hooks
- Framer Motion: Inline motion components and variants
- Scroll triggers: Configured with GSAP ScrollTrigger

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Runs development server
- `npm run build` - Creates production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Runs ESLint to check code quality
- `npm run lint:fix` - Runs ESLint and automatically fixes issues

## 🌟 Key Features Explained

### Smooth Scrolling
Implemented with Lenis for natural, momentum-based scrolling across all devices.

### Active Navigation
Navigation automatically highlights the current section based on scroll position.

### GSAP Animations
- Hero text animations with staggered reveals
- Scroll-triggered section animations
- Bouncing skill icons with different timing
- Project image slide-in effects

### Framer Motion Effects
- Hover animations on buttons and cards
- Page transition effects
- Interactive form elements
- Smooth component mounting/unmounting

### Glassmorphism Design
- Semi-transparent backgrounds with backdrop blur
- Subtle borders and shadows
- Layered visual hierarchy
- Modern, clean aesthetic

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

---

Built with ❤️ using React, Tailwind CSS, Framer Motion, and GSAP

## 🔍 Code Quality & Linting

This project includes a comprehensive ESLint configuration for maintaining code quality and consistency.

### ESLint Configuration

The project uses ESLint with the following plugins and rules:

- **React**: Best practices for React development
- **React Hooks**: Ensures proper hooks usage
- **JSX Accessibility**: Accessibility guidelines for JSX
- **Import**: Manages import/export statements
- **Code Style**: Consistent formatting and style rules

### Running ESLint

```bash
# Check for linting issues
npm run lint

# Automatically fix fixable issues
npm run lint:fix
```

### ESLint Rules Highlights

- **React 17+ optimizations**: No need for React imports in JSX files
- **Accessibility**: Comprehensive a11y rules for inclusive design
- **Code style**: Consistent indentation, spacing, and formatting
- **Import organization**: Automatic import sorting and organization
- **Best practices**: Modern JavaScript and React patterns

### IDE Integration

For the best development experience, install ESLint extensions in your IDE:

- **VS Code**: ESLint extension by Microsoft
- **WebStorm**: Built-in ESLint support
- **Sublime Text**: SublimeLinter-eslint package

The ESLint configuration will help maintain code quality, catch potential bugs early, and ensure consistent code style across the project.