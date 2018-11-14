import mongoose from 'mongoose'

const Schema = mongoose.Schema

const imageSchema = new Schema({
	src: String,
  uploadedBy: String,
  uploaderId: String,
  created_on: {
    type: Date,
    default: Date.now()
  }
});

export default imageSchema 