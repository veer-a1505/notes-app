import mongoose from 'mongoose'
import User from '../models/userModel.js'
import Note from './../models/notesModel.js'

export const createNote = async (req, res, next) => {
  try {
    const notes = await Note.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        notes,
      },
    })
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      data: {
        message: error.message,
      },
    })
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
      data: {
        userNotes,
      },
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
      return res.status(404).json({
        status: 'error',
        data: {
          message: `Notes not found with this ${req.params._id}`,
        },
      })
    }

    res.status(200).json({
      status: 'success',
      data: {
        note,
      },
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

export const updateNoteByID = async (req, res, next) => {
  try {
    const updatedNotes = await Note.findByIdAndUpdate(req.params, req.body, {
      new: true,
    })

    if (!updatedNotes) {
      return res.status(404).json({
        status: 'error',
        data: {
          message: `Notes not found with this ${req.params._id}`,
        },
      })
    }

    res.status(200).json({
      status: 'success',
      data: {
        updatedNotes,
      },
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

export const deleteNoteByID = async (req, res, next) => {
  try {
    const notes = await Note.findOneAndDelete(req.params)

    if (!notes) {
      return res.status(404).json({
        status: 'error',
        data: {
          message: `Notes not found with this ${req.params._id}`,
        },
      })
    }

    res.status(200).json({
      status: 'success',
      data: {
        message: 'Succssfully deleted',
      },
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
