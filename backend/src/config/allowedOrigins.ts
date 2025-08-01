const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://localhost:5173",
  /\.vercel\.app$/,  // Allow all Vercel app domains
  process.env.FRONTEND_URL || "http://localhost:5173"
]

export default allowedOrigins