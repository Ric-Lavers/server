import {
  addWord,
  allWords,
  allGroups,
  addGroup,
  findOrCreateGroup
} from "../models/words.model"


const postGroup = async (req, res) => {
  try {
    console.log(req.body);

    const response = await addGroup(req.body)
    console.log(response);

    res.send(response)
  } catch (error) {
    console.log(error.message);

    res.status(400).send(error)
  }
}

const getGroupByName = async (req, res) => {
  req.query.name
  try {
    const response = await findOrCreateGroup(req.query.name)
    res.send(response)
  } catch (error) {
    res.status(400).send(error)
  }
}

const getGroups = async (req, res) => {
  try {
    const response = await allGroups()
    res.send(response)
  } catch (error) {
    res.status(400).send(error)
  }
}

const postWord = async (req, res, next) => {

  let group = await findOrCreateGroup(req.query.groupName)
  console.log(group);


  try {
    const word = await addWord(req.body)
    group.words.push(word)
    group.save()
    res.send(group)
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
  postGroup,
  getGroups,
  getGroupByName,
}