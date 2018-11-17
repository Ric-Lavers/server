import { Message } from '../dbConnectors'

const allMessages = async () => {
	const messages = await Message.find()
	return messages.reverse()
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