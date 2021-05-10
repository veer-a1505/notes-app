import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/userModel.js'
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
      return res.status(400).json({
        status: 'error',
        data: {
          message: "You're not logged In please login and get access token.",
        },
      })
    }

    const decodedUser = await jwt.verify(token, process.env.JWT_SECRET)

    // check user exist or not

    const user = await User.findById({ _id: decodedUser.user_id })

    console.log(user)

    if (!user) {
      return res.status(401).json({
        status: 'error',
        data: {
          message:
            'User does not exist to this token, please login and get access token',
        },
      })
    }

    req.currentUser = decodedUser.user_id

    next()
  } catch (error) {
    res.status(401).json({
      status: 'error',
      data: {
        message: error.message,
      },
    })
  }
}
