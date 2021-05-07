import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'please provide title'],
      unique: true,
      trim: true,
    },
    text: {
      type: String,
      trim: true,
      required: [true, 'Please provide text'],
    },
    lable: {
      type: String,
      required: [true, 'please provide lable'],
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
