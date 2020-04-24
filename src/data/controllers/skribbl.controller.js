import { addWord, allWords } from "../models/words.model"

const postWord = async (req, res) => {
  console.log("postWord", req.body, req)
  try {
    const response = await addWord(req.body)
    res.send(response)
  } catch (error) {
    console.error(error.message)
    res.send(error)
  }
}

const getWords = async (req, res) => {
  try {
    const response = await allWords()
    res.send(response)
  } catch (error) {
    console.error(error.message)
    res.send(error)
  }
}

export default {
  postWord,
  getWords,
}
