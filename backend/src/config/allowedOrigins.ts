const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://url-shortener-frontend-eta-three.vercel.app", // Remove trailing slash
  /\.vercel\.app$/ // Allow all Vercel domains
]

export default allowedOrigins