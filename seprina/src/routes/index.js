const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityControllers.js')

router.get('/', (req, res) => {
    res.send("safhe aval")
})
router.get('/city', cityController.getCity)

router.get('/about', (req, res) => {
    res.send("about us page")
})
module.exports = router