import mongoose from "mongoose"

const Schema = mongoose.Schema

const wordSchema = new Schema({
  word: {
    type: String,
    unique: true,
  },
  created_on: {
    type: Date,
    default: Date.now(),
  },
})

export default wordSchema
