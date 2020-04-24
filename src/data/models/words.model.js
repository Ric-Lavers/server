import { Word } from "../dbConnectors"

const allWords = async () => {
  const words = await Word.find({}).select("word")

  return words.map(({ word }) => word)
}

const addWord = async (input) => {
  let newWord = new Word({
    ...input,
  })

  newWord.id = newWord._id
  return await newWord.save()
}

export { allWords, addWord }
