import { Image } from '../dbConnectors'

const allImages = async () => {
  return await Image.find()
}

const createImage = async ( input ) => {
  console.log("createImage")
	let newImage = new Image({
		...input
	});
	newImage.id = newImage._id
	return await newImage.save()
}

export {
	allImages,
	createImage,
}