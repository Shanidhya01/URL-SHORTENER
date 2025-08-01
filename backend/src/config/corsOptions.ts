import allowedOrigins from "./allowedOrigins.js"

const corsOptions = {
  origin: (origin: any, callback: any)=> {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true)
    
    // Check if origin is in allowed origins array or matches regex patterns
    const isAllowed = allowedOrigins.some((allowedOrigin: any) => {
      if (typeof allowedOrigin === 'string') {
        return allowedOrigin === origin
      } else if (allowedOrigin instanceof RegExp) {
        return allowedOrigin.test(origin)
      }
      return false
    })
    
    if (isAllowed) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
}

export default corsOptions