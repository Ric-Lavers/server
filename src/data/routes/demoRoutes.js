import express from 'express'
import controller from '../controllers/demo'

const router = express.Router()

router.get('/get', controller.getDemo);
router.post('/post', controller.postDemo);

export default router
