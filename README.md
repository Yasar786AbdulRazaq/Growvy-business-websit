# Growvy Website

A modern, responsive business website built with React, TypeScript, and Tailwind CSS. This website showcases Growvy's services including hiring solutions, e-commerce support, and business optimization tools.

## 🚀 Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **TypeScript Support** - Type-safe development with full TypeScript integration
- **Modern UI Components** - Built with Tailwind CSS and Lucide React icons
- **Interactive Navigation** - Smooth navigation with active state highlighting
- **Functional Job Board** - Jobs page with clickable "Apply Now" buttons
- **Service Showcase** - Detailed service pages with pricing information
- **Success Stories** - Client testimonials and company achievements

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful, customizable icons

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with mobile menu
│   ├── Footer.tsx      # Website footer with links and social media
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Page components
│   ├── Home.tsx        # Homepage with hero section
│   ├── Jobs.tsx        # Job listings with Apply Now functionality
│   ├── Services.tsx    # Services overview
│   ├── Success.tsx     # Success stories and testimonials
│   └── Pricing.tsx     # Pricing plans and packages
├── App.tsx             # Main app with routing configuration
└── main.tsx            # Application entry point
```

## 🎨 Design Features

### Navigation
- Sticky header with smooth scrolling
- Mobile-responsive hamburger menu
- Active page highlighting
- Smooth hover transitions

### Pages
- **Home**: Hero section, company mission, user type cards
- **Jobs**: Interactive job listings with category filters
- **Services**: Service cards with detailed feature lists
- **Success**: Client logos and testimonial carousel
- **Pricing**: Three-tier pricing structure for different solutions

### Interactive Elements
- Clickable "Apply Now" buttons on job listings
- Hover effects on cards and buttons
- Responsive grid layouts
- Mobile-optimized touch interactions

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:5173`

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Functionality

### Apply Now Feature
The "Apply Now" buttons in the Jobs section are fully functional and will:
- Display a confirmation alert when clicked
- Can be easily integrated with a backend API
- Include job ID for tracking applications

### Responsive Design
- Mobile-first approach
- Breakpoint-optimized layouts
- Touch-friendly navigation
- Optimized typography scaling

### TypeScript Integration
- Full type safety across all components
- Interface definitions for props and data
- Type-safe routing and navigation

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `App.tsx`
3. Update navigation in `Header.tsx`

### Styling
- Use Tailwind CSS classes for consistent styling
- Custom styles can be added to `index.css`
- Component-specific styles using Tailwind utilities

### Icons
- Uses Lucide React for consistent iconography
- Easy to replace or add new icons
- Fully customizable size and color

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For setup help, see the detailed [VS Code Setup Guide](./VS_CODE_SETUP_GUIDE.md).

For issues or questions, please create an issue in the repository.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

