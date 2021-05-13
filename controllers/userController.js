import User from '../models/userModel.js'
import * as auth from './authToken.js'

export const createUser = async (req, res, next) => {
  try {
    const { email } = req.body

    console.log(req.body)

    const user = await User.findOne({ email })

    if (user) {
      return res.status(409).json({
        status: 'error',
        data: {
          message: 'User already exists',
        },
      })
    }

    const newUser = await User.create(req.body)

    return res.status(200).json({
      success: 'success',
      data: {
        newUser,
      },
    })
  } catch (error) {
    return res.status(400).json({
      success: 'error',
      data: {
        message: error.message,
      },
    })
  }
}

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      status: 'error',
      data: {
        message: 'Please provide email and password',
      },
    })
  }

  const user = await User.findOne({ email })

  if (!user || !(await user.comparePassword(password, user.password))) {
    return res.status(401).json({
      status: 'error',
      data: {
        message: 'Incorrect email or password',
      },
    })
  }

  const accessToken = auth.generateToken(user._id)

  res.cookie('jwt', accessToken, {
    maxAge: '120000',
    secure: true,
  })

  res.status(200).json({
    status: 'success',
    data: {
      user,
      accessToken,
      message: 'Successfully Logged In..!',
    },
  })
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
