import User from '../models/userModel.js'

export const createUser = async (req, res, next) => {
  try {
    const body = req.body

    console.log(body)

    res.status(200).json({ body })
  } catch (error) {}
}

export const loginUser = async (req, res, next) => {
  res.status(200).json({ message: 'User login' })
}
