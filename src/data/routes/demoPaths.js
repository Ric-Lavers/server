import express from "express"
const router = express.Router()
import { createDemo } from "../models/demo"

let demoPaths = {}

router.postDemo = (req, res) => {
  console.log(Object.keys(req))
  console.log(req.params)
  console.log(req.res)
  return { greeting: "hello" }
  // createDemo(req.body)
}

export default demoPaths
