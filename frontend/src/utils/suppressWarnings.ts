// Utility to suppress specific console warnings in production
export const suppressDeprecationWarnings = () => {
  if (import.meta.env.PROD) {
    // Store the original console.warn function
    const originalWarn = console.warn;
    
    // Override console.warn to filter out specific deprecation warnings
    console.warn = (...args: any[]) => {
      const message = args.join(' ');
      
      // Suppress -ms-high-contrast deprecation warnings
      if (message.includes('-ms-high-contrast') || 
          message.includes('Deprecation') ||
          message.includes('being deprecated')) {
        return; // Don't log these warnings
      }
      
      // Call the original console.warn for other warnings
      originalWarn.apply(console, args);
    };
  }
};

// Function to add modern forced colors support
export const addModernForcedColorsSupport = () => {
  // Check if forced colors mode is supported
  if (window.matchMedia && window.matchMedia('(forced-colors: active)').matches) {
    document.documentElement.style.setProperty('color-scheme', 'light dark');
    document.documentElement.style.setProperty('forced-color-adjust', 'auto');
  }
  
  // Listen for changes in forced colors mode
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(forced-colors: active)');
    mediaQuery.addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.style.setProperty('color-scheme', 'light dark');
        document.documentElement.style.setProperty('forced-color-adjust', 'auto');
      }
    });
  }
};
