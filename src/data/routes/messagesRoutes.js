import express from 'express'
import controller from '../controllers/messages'

const router = express.Router()

router.get('/', controller.getMessages);
router.post('/', controller.postMessage);

export default router