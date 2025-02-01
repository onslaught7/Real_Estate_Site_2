# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- npx tailwindcss init -p  -->
1. tailwindcss ^3.4.17 is required to run

<!-- Folder Structure Description (src) -->
src/
├── assets/                # Stores images, icons, and static files  
├── components/ 
|   └── ui/           # Contains reusable UI components  
|       └── Navbar.jsx
│       └── button.jsx    
├── pages/                 # Defines different sections of the app  
│   ├── Home.jsx  
│   ├── Properties.jsx  
│   ├── PropertyDetails.jsx  
│   ├── About.jsx  
│   └── Contact.jsx  
├── lib/                   # Manages API calls and utility functions  
│   ├── api-client.js  
│   ├── utils.js  
├── store/                 # Handles global state management  
│   ├── slices/  
│   │   └── auth-slice.js  
│   └── index.js  
├── utils/                 # Stores reusable helper functions and constants  
│   └── constants.js  
├── App.css                # Global styles  
├── App.jsx                # Main app component  
├── index.css              # Base styles  
└── index.jsx              # Entry point of the application  
