import mongoose from "mongoose"

import {
  wordSchema
} from './word.schema'


const Schema = mongoose.Schema
mongoose.set("useCreateIndex", true)


export const groupSchema = new Schema({
  name: String,
  words: [wordSchema],
  created_on: {
    type: Date,
    default: Date.now(),
  },
})