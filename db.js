import mongoose from 'mongoose'
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

export default dbConnection
