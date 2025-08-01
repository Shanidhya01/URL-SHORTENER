import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/dbConnection'
import corsOptions from './config/corsOptions'
import shortUrl from './routes/shortUrl.routes'

// Making the environment variables available throughout the app
dotenv.config()
// Server port defined
const PORT = process.env.PORT || 5000
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


/* SERVER LISTENER */
app.listen(PORT, ()=> {
  connectDB() // Database connection invoked
  console.log(`Server listening on port ${PORT}...`)
})
