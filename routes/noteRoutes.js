import express from 'express'
const noteRoutes = express.Router()
import * as noteController from './../controllers/noteController.js'

noteRoutes.post('/addnote', noteController.createNote)

noteRoutes.get('/getNoteByID/:_id', noteController.getNotesByID)
noteRoutes.patch('/updateNoteByID/:_id', noteController.updateNoteByID)
noteRoutes.delete('/deleteNoteByID/:_id', noteController.deleteNoteByID)

export default noteRoutes
