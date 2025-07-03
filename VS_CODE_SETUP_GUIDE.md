# Growvy Website - VS Code Setup Guide

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
   - React Router
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
8. **GitLens** - Enhanced Git capabilities

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

4. You should see the Growvy website running!

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
growvy-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Website footer
│   │   └── Layout.tsx     # Main layout wrapper
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Homepage
│   │   ├── Jobs.tsx      # Jobs page with Apply Now functionality
│   │   ├── Services.tsx  # Services page
│   │   ├── Success.tsx   # Success stories page
│   │   └── Pricing.tsx   # Pricing page
│   ├── App.tsx           # Main app component with routing
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite build tool configuration
```

## Key Features Implemented

### Navigation
- Fully functional navigation bar with active state highlighting
- Mobile-responsive hamburger menu
- Smooth transitions and hover effects

### Pages
- **Home**: Hero section, company description, user type cards
- **Jobs**: Job listings with clickable "Apply Now" buttons, category filters
- **Services**: Service cards with detailed descriptions
- **Success**: Client testimonials and success stories
- **Pricing**: Three-tier pricing plans for different solutions

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Responsive grid layouts
- Touch-friendly navigation on mobile devices

### TypeScript Integration
- Full TypeScript support for type safety
- Proper interface definitions for components
- Type-safe routing with React Router

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

4. **Tailwind styles not working**
   - Ensure `tailwind.config.js` is properly configured
   - Check that Tailwind directives are in `index.css`

### Getting Help

- Check the browser console for any JavaScript errors
- Use VS Code's built-in TypeScript error checking
- Refer to the official documentation:
  - [React](https://react.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Vite](https://vitejs.dev/)

## Development Tips

1. **Hot Reload**: The development server supports hot reload - changes will automatically refresh the browser
2. **Component Development**: Create new components in the `src/components/` directory
3. **Styling**: Use Tailwind CSS classes for styling - they provide excellent responsiveness
4. **Icons**: Use Lucide React icons for consistent iconography
5. **Routing**: Add new routes in `App.tsx` and create corresponding page components

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

## Next Steps

- Customize the design and content to match your specific requirements
- Add more interactive features as needed
- Implement backend integration for the "Apply Now" functionality
- Add form validation and user authentication
- Optimize for SEO and performance

Happy coding! 🚀

