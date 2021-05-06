import User from '../models/userModel.js'

export const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    return res.status(200).json({
      success: 'success',
      data: {
        user,
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

  next()
}

export const loginUser = async (req, res, next) => {
  try {
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

    res.status(200).json({
      status: 'success',
      data: {
        message: 'Successfully Logged In..!',
      },
    })
  } catch (error) {
    return next()
  }
}
