const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://url-shortener-frontend-eta-three.vercel.app/", // Add your actual frontend Vercel URL here
  /\.vercel\.app$/ // Allow all Vercel domains
]

export default allowedOrigins