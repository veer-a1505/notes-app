import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from 'path'
import cors from 'cors'
import userRouter from './routes/userRoutes.js'
import noteRoutes from './routes/noteRoutes.js'
import { errorHandler } from './utils/error.js'
import cookieParser from 'cookie-parser'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Middlewares
app.use(cookieParser())
app.use(morgan('dev'))
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Server is listening for your request...' })
})

app.use('/api/users', userRouter)
app.use('/api/notes', noteRoutes)

app.use((err, req, res, next) => {
  errorHandler(err, res)
})

//DB connection
const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log('DB connetion successfull...')
  } catch (error) {
    console.log(error.message)
  }
}

dbConnection()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname), 'frontend', 'build', 'index.html')
  })
}

// Server is running
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`)
})
