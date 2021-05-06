import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'please provide username'],
  },
  email: {
    type: String,
    required: [true, 'please provide email'],
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: [true, 'please provide password'],
  },
  accountCreatedAt: {
    type: String,
    default: Date,
  },
})

// Hash password before saving document
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

// Verify passowrd if it matches or not
userSchema.methods.comparePassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword)
}

const User = mongoose.model('User', userSchema)

export default User
