const express = require('express')

const router = express.Router()

const familyController = require('../controllers/familyController')

router.get('/', familyController.index)

router.get('/:index', familyController.show)

module.exports = router

