import { allImages, createImage } from '../models/images'

const postImage = async (req, res) => {
  console.log('postImage')
  try {
    const response = await createImage(req.body)
    res.send(response)
  } catch (error) {
    console.error(error.message)
    res.send(error)
  }
}

const getImages = async (req, res) => {
	try {
		const response = await allImages()
		res.send(response)
	} catch (error) {
		console.error(error.message)
    res.send(error)
	}
}

export default {
  getImages,
  postImage,
}