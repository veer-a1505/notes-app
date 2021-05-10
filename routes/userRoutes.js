import express from 'express'
const userRouter = express.Router()
import * as userController from '../controllers/userController.js'

userRouter.post('/signup', userController.createUser)
userRouter.post('/signin', userController.loginUser)
userRouter.get('/signout', userController.logoutUser)

export default userRouter
