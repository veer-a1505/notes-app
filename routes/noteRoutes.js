import express from 'express'
const noteRoutes = express.Router()
import * as noteController from './../controllers/noteController.js'

noteRoutes.post('/addnote', noteController.createNote)

export default noteRoutes
