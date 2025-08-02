// Get the backend URL from environment variables with fallback
const getServerUrl = (): string => {
  const envUrl = import.meta.env.VITE_URL;
  
  // If no environment variable is set, provide a fallback
  if (!envUrl) {
    console.warn('VITE_URL environment variable not set. Using fallback URL.');
    return 'http://localhost:3001';
  }
  
  // Remove trailing slash if present
  return envUrl.replace(/\/$/, '');
};

export const serverUrl = `${getServerUrl()}/api`;

// Export for debugging purposes
export const backendUrl = getServerUrl();