import { createDemo } from '../models/demoModel'

const getDemo = (req, res) => {
  try {
    res.send({get_request_demo: "success!"})
  } catch (error) {
    res.send(error)
  }
};

const postDemo = async (req, res) => {
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