import mongoose from 'mongoose'

const Schema = mongoose.Schema

const personSchema = new Schema({
	name: {
    type:String,
    required: true
  },
	email: String,
  phoneNumber: String,
  bed: Boolean,
  car: Boolean,
  created_on: {
    type: Date,
    default: Date.now()
  }
});

export default personSchema 