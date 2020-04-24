require("dotenv").config()
import express from "express"
import demoPaths from "./data/routes/demoPaths"
import skibblPaths from "./data/routes/skribbl.routes"

const cors = require("cors")
const app = express()

app.use(cors())

app.get("/", (req, res) => {
  return res.status(200).json("HOME")
})

app.post("/demo", (req, res) => demoPaths.postDemo(req, res))
app.use("/skibbl", skibblPaths)

app.listen(8080, () => console.log("Running server on port localhost:8080"))
