import { allMessages, createMessage } from '../models/message'

const postMessage = async (req, res) => {
  try {
    const response = await createMessage(req.body)
    res.send(response)
  } catch (error) {
    console.error(error.message)
    res.send(error)
  }
}

const getMessages = async (req, res) => {
	try {
		const response = await allMessages()
		res.send(response)
	} catch (error) {
		console.error(error.message)
    res.send(error)
	}
}

export default {
	postMessage,
	getMessages,
}