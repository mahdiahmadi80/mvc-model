const express = require('express')
const router = express.Router()
const path= require('path')
const cityController = require('../controllers/cityControllers.js')

router.get('/', (req, res) => {
    res.send("safhe aval")
})
router.get('/city', cityController.getCity)

router.get('/city/cityadd', (req, res) => {
    const filepath = path.join(__dirname + './../views/cityForm.html')
    res.sendFile(filepath)
})
router.get('/city/search', (req, res) => {
    const filepath = path.join(__dirname + './../views/citySearch.html')
    res.sendFile(filepath)
})
router.post('/city', cityController.addCity)
router.post('/city', cityController.searchCity)


router.get('/about', (req, res) => {
    res.send("about us page")
})
module.exports = router