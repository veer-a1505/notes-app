import mongoose from 'mongoose'
import User from '../models/userModel.js'
import { AppError } from '../utils/error.js'
import Note from './../models/notesModel.js'

export const createNote = async (req, res, next) => {
  try {
    const { title, text, lable } = req.body

    if (!title || !text || !lable) {
      throw new AppError(
        400,
        'Please fill required title , text and lable fields'
      )
    }
    const notes = await Note.create({
      title,
      text,
      lable,
      postedBy: req.currentUser._id,
    })

    const postedBy = notes.postedBy
    res.status(201).json({
      status: 'success',
      postedBy,
    })
  } catch (error) {
    next(error)
  }
}

export const getNotesByUserID = async (req, res, next) => {
  try {
    const id = req.params._id

    const userNotes = await Note.find({ postedBy: id })

    if (!userNotes) {
      return res.status(404).json({
        status: 'error',
        data: {
          message: 'Notes not found for this user',
        },
      })
    }

    res.status(200).json({
      status: 'success',
      userNotes,
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      data: {
        message: error.message,
      },
    })
  }
}

export const getNotesByID = async (req, res, next) => {
  try {
    console.log(req.headers.authorization)
    const note = await Note.findById(req.params)

    if (!note) {
      throw new AppError(404, ' Notes not found')
    }

    res.status(200).json({
      status: 'success',
      data: {
        note,
      },
    })
  } catch (error) {
    next(error)
  }
}

export const updateNoteByID = async (req, res, next) => {
  try {
    const updatedNotes = await Note.findByIdAndUpdate(req.params, req.body, {
      new: true,
    })

    if (!updatedNotes) {
      throw new AppError(404, `Notes not found with this ${req.params._id}`)
    }

    res.status(200).json({
      status: 'success',
      data: {
        updatedNotes,
      },
    })
  } catch (error) {
    next(error)
  }
}

export const deleteNoteByID = async (req, res, next) => {
  try {
    const notes = await Note.findOneAndDelete(req.params)

    if (!notes) {
      throw new AppError(404, `Notes not found with this ${req.params._id}`)
    }

    res.status(200).json({
      status: 'success',
      data: {
        message: 'Succssfully deleted',
      },
    })
  } catch (error) {
    next(error)
  }
}
