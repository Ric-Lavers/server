require("dotenv").config()
import mongoose from "mongoose"

import { demoSchema, wordSchema } from "./mongoSchemas"

var MONGO_URI = process.env.DEVELOPMENT_MONGO_URI

//Mongo connection
mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI, { useNewUrlParser: true })

const Demo = mongoose.model("demo", demoSchema)
const Word = mongoose.model("word", wordSchema)

export { Demo, Word }
