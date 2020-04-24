import { Word } from "../dbConnectors"

const allWords = async () => {
  return await Word.find()
}

const addWord = async (input) => {
  console.log("create word", input)

  let newWord = new Word({
    ...input,
  })
  console.log("newWord", newWord)
  newWord.id = newWord._id
  return await newWord.save()
}

export { allWords, addWord }
