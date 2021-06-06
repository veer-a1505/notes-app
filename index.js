import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import dbConnection from './db.js'
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
const PORT = process.env.PORT || 5000

//DB connection
dbConnection()

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

//error handler
app.use((err, req, res, next) => {
  errorHandler(err, res)
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname), 'client', 'build', 'index.html')
  })
}

// Server is running

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`)
})
