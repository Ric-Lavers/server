import { createDemo } from '../models/demoModel'

const getDemo = (req, res) => {
  console.log("getDemo")
  try {
    res.send({demo: "success!"})
  } catch (error) {
    res.send(error)
  }
};

const postDemo = async (req, res) => {
  console.log("postDemo", req.body)
  try {
    const response = await createDemo(req.body)
    res.send(response)
  } catch (error) {
    res.send(error)
  }
}

module.exports = {
  getDemo,
  postDemo,
}