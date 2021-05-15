import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
    },
    text: {
      type: String,
      trim: true,
    },
    lable: {
      type: String,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_At', updatedAt: 'updated_At' },
  }
)

const Note = mongoose.model('Note', noteSchema)

export default Note
