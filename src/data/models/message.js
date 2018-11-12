import { Message } from '../dbConnectors'

const allMessages = async () => {
  return await Message.find()
}

const createMessage = async ( input ) => {
	let newMessage = new Message({
		...input
	});
	newMessage.id = newMessage._id
	return await newMessage.save()
}

export {
	allMessages,
	createMessage,
}