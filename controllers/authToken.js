import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/userModel.js'
import { AppError } from '../utils/error.js'
dotenv.config()

export const generateToken = (id) => {
  const token = jwt.sign(
    {
      user_id: id,
    },
    process.env.JWT_SECRET,
    { expiresIn: '2m' }
  )
  return token
}

export const verifyToken = async (req, res, next) => {
  let token
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
      throw new AppError(400, 'please login and get access token.')
    }

    const decodedUser = await jwt.verify(token, process.env.JWT_SECRET)

    // check user exist or not
    const user = await User.findById({ _id: decodedUser.user_id })

    if (!user) {
      throw new AppError(
        401,
        'User does not exist to this token, please login and get access token'
      )
    }

    req.currentUser = user

    next()
  } catch (error) {
    console.table(error)
    next(error)
  }
}
