import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from '../src/config/dbConnection.js'
import corsOptions from '../src/config/corsOptions.js'
import shortUrl from '../src/routes/shortUrl.routes.js'

// Making the environment variables available throughout the app
dotenv.config()

// Initializing app as an instance of Express
const app = express()

/* MIDDLEWARES */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))
app.use('/api/', shortUrl)

// Health check route
app.get("/", (req, res) => {
  res.send("Backend server is running ✅");
});

// Connect to database on app initialization
connectDB()

// Export the app for Vercel
export default app
