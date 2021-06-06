import express from 'express'
const noteRoutes = express.Router()
import * as noteController from './../controllers/noteController.js'
import * as auth from '../controllers/authToken.js'

noteRoutes.use(auth.verifyToken)

noteRoutes.post('/addnote', noteController.createNote)

noteRoutes.get('/getNoteByID/:_id', noteController.getNotesByID)

noteRoutes.patch('/updateNoteByID/:_id', noteController.updateNoteByID)

noteRoutes.delete('/deleteNoteByID/:_id', noteController.deleteNoteByID)

noteRoutes.get('/getNotesByUserID/:_id', noteController.getNotesByUserID)

export default noteRoutes
