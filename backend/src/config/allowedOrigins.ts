const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "http://localhost:4173", // Vite preview
  "https://url-shortener-frontend-eta-three.vercel.app",
  /^https:\/\/.*\.vercel\.app$/, // Allow all Vercel domains
  /^https:\/\/url-shortener.*\.vercel\.app$/, // Specific pattern for your project
]

export default allowedOrigins