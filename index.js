import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'
import userRouter from './routes/userRoutes.js'
import noteRoutes from './routes/noteRoutes.js'

const app = express()

// Middlewares
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Server is listening for your request...' })
})

app.use('/api/users', userRouter)
app.use('/api/notes', noteRoutes)

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

// Server is running
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`)
})
