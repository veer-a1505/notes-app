import User from '../models/userModel.js'
import { AppError } from '../utils/error.js'
import * as auth from './authToken.js'

export const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
      throw new AppError(
        400,
        'Please provide required username & email and password fields'
      )
    }

    const user = await User.findOne({ email })

    if (user) {
      throw new AppError(409, 'User with email id already exists')
    }

    const newUser = await User.create(req.body)

    return res.status(200).json({
      success: 'success',
      data: {
        newUser,
      },
    })
  } catch (error) {
    next(error)
  }
}

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      throw new AppError(400, 'Please provide email and password')
    }

    const user = await User.findOne({ email })

    if (!user || !(await user.comparePassword(password, user.password))) {
      throw new AppError(401, 'Incorrect email or password')
    }

    const accessToken = auth.generateToken(user._id)

    res.cookie('jwt', accessToken, {
      maxAge: '120000',
      httpOnly: true,
    })

    res.status(200).json({
      status: 'success',
      data: {
        user,
        accessToken,
        message: 'Successfully Logged In..!',
      },
    })
  } catch (error) {
    next(error)
  }
}

export const logoutUser = async (req, res, next) => {
  res.cookie('jwt', '', { maxAge: '60000', httpOnly: true })

  res.status(200).json({
    status: 'success',
    data: {
      message: 'Successfully logout',
    },
  })
}
