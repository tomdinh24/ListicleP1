import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import entry from "../data/cards.js"
import CardsController from '../controllers/cards.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(entry)
})

router.get('/', CardsController.getCards)

router.get('/:cardId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/public/card.html'))
})

export default router;