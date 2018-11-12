import { createPerson, findPerson, findPeople } from '../models/person'

const getPerson = async (req, res) => {
  try {
    const { id } = req.query
    const response = await findPerson(id)
    res.send(response)
  } catch (error) {
    console.error(error.message)
    res.send(error)
  }
}

const getAllPeople = async (req, res) => {
  try {
    const { id } = req.query
    const response = await findPeople()
    res.send(response)
  } catch (error) {
    console.error(error.message)
    res.send(error)
  }
}

const postPerson = async (req, res) => {
  // console.log(req.body)
  try {
    const response = await createPerson(req.body)
    res.send(response)
  } catch (error) {
    console.error(error.message)
    res.send(error)
  }
}

export default {
  postPerson,
  getPerson,
  getAllPeople,
}