import mongoose from 'mongoose'
const { Schema } = mongoose

const notesSchema = new Schema({
  title: {
    type: String,
    required: [true, 'please provide title'],
    unique: true,
    trim: true,
  },
  text: {
    type: String,
    required: [true, 'Please provide text'],
  },
  lable: {
    type: String,
    required: [true, 'please provide lable'],
  },
  date: {
    type: String,
    default: Date,
  },
})
