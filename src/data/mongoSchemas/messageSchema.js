import mongoose from 'mongoose'

const Schema = mongoose.Schema

const messageSchema = new Schema({
	name: String,
	message: String,
  personId: String,
  created_on: {
    type: Date,
    default: Date.now()
  }
});

export default messageSchema 