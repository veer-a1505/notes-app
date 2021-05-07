import Note from './../models/notesModel.js'

export const createNote = async (req, res, next) => {
  try {
    const notes = await Note.create(req.body)

    res.status(200).json({
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
