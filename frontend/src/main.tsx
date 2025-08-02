import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './App.css'
import App from './App.tsx'
import { suppressDeprecationWarnings, addModernForcedColorsSupport } from './utils/suppressWarnings'

// Initialize warning suppression and modern forced colors support
suppressDeprecationWarnings();
addModernForcedColorsSupport();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)