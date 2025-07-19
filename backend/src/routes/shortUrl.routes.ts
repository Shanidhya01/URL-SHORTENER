import express from 'express'
import { getAllUrl, getUrl, createUrl, deleteUrl } from '../controllers/shortUrl.controllers.js'

const router = express.Router()

/* GET routes */
router.get('/shortUrl', getAllUrl)
router.get('/shortUrl/:id', getUrl)

/* POST routes */
router.post('/shortUrl', createUrl)

/* DELETE routes */
router.delete('/shortUrl/:id', deleteUrl)

export default router