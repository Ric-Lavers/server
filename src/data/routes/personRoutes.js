import express from 'express'
import controller from '../controllers/person'

const router = express.Router()

router.get('/', controller.getPerson);
router.get('/all', controller.getAllPeople);
router.post('/', controller.postPerson);

export default router