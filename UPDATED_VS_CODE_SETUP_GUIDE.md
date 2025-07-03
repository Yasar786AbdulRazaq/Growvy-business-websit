# Growvy Website - Updated VS Code Setup Guide

## 🎯 New Website Structure

The website has been updated to meet your requirements:
- **Header appears only at the top** of the website
- **Footer appears only at the bottom** of the website  
- **Floating navigation** allows you to navigate to any section at any time
- **Single-page application** with smooth scrolling between sections
- **Fully visible content** with no page reloads

## Prerequisites

Before you begin, make sure you have the following installed on your system:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Visual Studio Code**
   - Download from: https://code.visualstudio.com/

## Project Setup Instructions

### Step 1: Clone or Download the Project

1. If you have the project as a ZIP file, extract it to your desired location
2. If using Git: `git clone <repository-url>`

### Step 2: Open Project in VS Code

1. Open Visual Studio Code
2. Click on "File" → "Open Folder"
3. Navigate to the `growvy-website` folder and select it
4. Click "Select Folder" to open the project

### Step 3: Install Dependencies

1. Open the integrated terminal in VS Code:
   - Press `Ctrl + `` (backtick) or `Cmd + `` on Mac
   - Or go to "Terminal" → "New Terminal"

2. Make sure you're in the project root directory (you should see `package.json` file)

3. Install all dependencies:
   ```bash
   npm install
   ```

   This will install all the required packages including:
   - React 19
   - TypeScript
   - Tailwind CSS
   - Lucide React (for icons)
   - Vite (build tool)

### Step 4: Install Recommended VS Code Extensions

Install these extensions for the best development experience:

1. **ES7+ React/Redux/React-Native snippets** - Provides useful React snippets
2. **TypeScript Importer** - Auto imports TypeScript modules
3. **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
4. **Prettier - Code formatter** - Code formatting
5. **ESLint** - Code linting
6. **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
7. **Bracket Pair Colorizer** - Color matching brackets

To install extensions:
- Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac)
- Search for each extension name
- Click "Install"

### Step 5: Configure VS Code Settings

Create a `.vscode/settings.json` file in your project root with these recommended settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

## Running the Development Server

### Start the Development Server

1. In the VS Code terminal, run:
   ```bash
   npm run dev
   ```

2. The development server will start and you'll see output similar to:
   ```
   Local:   http://localhost:5173/
   Network: http://192.168.x.x:5173/
   ```

3. Open your browser and navigate to `http://localhost:5173/`

4. You should see the Growvy website with the new structure!

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## New Website Structure

```
growvy-website/
├── src/
│   ├── components/              # Reusable components
│   │   ├── FloatingNavigation.tsx   # Always-visible navigation
│   │   ├── WebsiteHeader.tsx        # Header (top only)
│   │   └── WebsiteFooter.tsx        # Footer (bottom only)
│   ├── sections/               # Page sections
│   │   ├── HomeSection.tsx     # Home content
│   │   ├── JobsSection.tsx     # Jobs with Apply Now buttons
│   │   ├── ServicesSection.tsx # Services overview
│   │   ├── SuccessSection.tsx  # Success stories
│   │   └── PricingSection.tsx  # Pricing plans
│   ├── App.tsx                 # Main app component
│   └── main.tsx               # Application entry point
```

## Key Features Implemented

### ✅ **Single Page Application**
- All content flows vertically in one continuous page
- No page reloads or routing
- Smooth scrolling between sections

### ✅ **Header & Footer Placement**
- **Header**: Appears only at the very top of the website
- **Footer**: Appears only at the very bottom of the website
- Clean, uncluttered design

### ✅ **Floating Navigation**
- Always visible navigation bar
- Smooth scroll to any section
- Active section highlighting
- Mobile-responsive with hamburger menu

### ✅ **Fully Functional Features**
- **Apply Now buttons**: Clickable on all job listings
- **Category filters**: Job filtering functionality
- **Interactive elements**: Hover effects and smooth transitions
- **Responsive design**: Works on all devices

### ✅ **TypeScript Implementation**
- All components use `.tsx` extension
- Full type safety
- Interface definitions for props and data

## Navigation Functionality

### How Navigation Works

1. **Floating Navigation Bar**: Always visible at the top of the viewport
2. **Smooth Scrolling**: Click any navigation item to smoothly scroll to that section
3. **Active Section Highlighting**: The current section is highlighted in the navigation
4. **Mobile Support**: Responsive hamburger menu for mobile devices

### Section IDs

Each section has a unique ID for navigation:
- `#home` - Home section
- `#jobs` - Jobs section  
- `#services` - Services section
- `#success` - Success stories section
- `#pricing` - Pricing section

## Customization

### Adding New Sections

1. Create a new component in `src/sections/`
2. Add the section to `App.tsx`
3. Update the navigation in `FloatingNavigation.tsx`

### Styling

- Use Tailwind CSS classes for consistent styling
- Custom styles can be added to `index.css`
- Component-specific styles using Tailwind utilities

### Icons

- Uses Lucide React for consistent iconography
- Easy to replace or add new icons
- Fully customizable size and color

## Testing the Website

### What to Test

1. **Navigation**: Click each navigation item to ensure smooth scrolling
2. **Apply Now Buttons**: Test job application functionality
3. **Responsive Design**: Test on different screen sizes
4. **Interactive Elements**: Test hover effects and transitions
5. **Mobile Menu**: Test hamburger menu on mobile

### Browser Testing

Test in these browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Troubleshooting

### Common Issues

1. **Port already in use**
   - If port 5173 is busy, Vite will automatically use the next available port
   - Check the terminal output for the correct URL

2. **Dependencies not installing**
   - Delete `node_modules` folder and `package-lock.json`
   - Run `npm install` again

3. **TypeScript errors**
   - Make sure all `.tsx` files are properly formatted
   - Check that all imports have correct file extensions

4. **Smooth scrolling not working**
   - Ensure section IDs match navigation targets
   - Check browser support for smooth scrolling

### Getting Help

- Check the browser console for any JavaScript errors
- Use VS Code's built-in TypeScript error checking
- Refer to the official documentation:
  - [React](https://react.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Vite](https://vitejs.dev/)

## Development Tips

1. **Hot Reload**: Changes automatically refresh the browser
2. **Component Development**: All sections are modular and reusable
3. **Styling**: Tailwind provides excellent responsive design utilities
4. **Icons**: Lucide React icons are consistent and customizable
5. **Navigation**: Easy to add new sections by updating the navigation array

## Production Build

When ready to deploy:

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` folder
3. You can preview the production build locally:
   ```bash
   npm run preview
   ```

## What's Different from Before

### Old Structure (Multi-page)
- ❌ Header and footer on every page
- ❌ Page reloads when navigating
- ❌ Separate route components

### New Structure (Single-page)
- ✅ Header only at top, footer only at bottom
- ✅ Smooth scrolling navigation
- ✅ Continuous content flow
- ✅ Always-visible floating navigation
- ✅ No page reloads

## Next Steps

- Customize the design and content to match your specific requirements
- Add more interactive features as needed
- Implement backend integration for the "Apply Now" functionality
- Add form validation and user authentication
- Optimize for SEO and performance

Happy coding! 🚀

---

**Note**: This updated structure provides exactly what you requested - header and footer appear only once, full website visibility, and navigation functionality that works from anywhere on the page.

