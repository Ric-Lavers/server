import express from "express"
import controller from "../controllers/skribbl.controller"

const router = express.Router()

router.post("/custom-words", controller.postWord)
router.get("/custom-words", controller.getWords)

export default router
