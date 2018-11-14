import express from 'express'
import controller from '../controllers/images'

const router = express.Router()

router.get('/', controller.getImages);
router.post('/post-src', controller.postImage);

export default router