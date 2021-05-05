import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'

const app = express()

// Middlewares
app.use(morgan('dev'))

// Server is running
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`)
})
