import { Word } from "../dbConnectors"

const allWords = async () => {
  return await Word.find()
}

const addWord = async (input) => {
  console.log("createImage")
  let newWord = new Word({
    ...input,
  })
  newWord.id = newWord._id
  return await newWord.save()
}

export { allWords, addWord }
