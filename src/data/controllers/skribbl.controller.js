import { addWord, allWords } from "../models/words.model"

const postWord = async (req, res, next) => {
  try {
    const response = await addWord(req.body)
    res.send(response)
  } catch (error) {
    res.status(400).send(error)
  }
}

const getWords = async (req, res) => {
  try {
    const response = await allWords()
    res.send(response)
  } catch (error) {
    console.error(error.message)
    res.status(400).send(error)
  }
}

export default {
  postWord,
  getWords,
}
