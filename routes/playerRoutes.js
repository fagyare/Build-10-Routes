// add express require route 
const express = require('express')

//Create our Router() & connect to express required 
const router = express.Router()

// Load Controllers and its Route logics 
const playerController = require('../controllers/playerController')

// Setup (router.get()) an "index" route for players & attach it to Router object
router.get('/', playerController.index)

// Setup (router.(get)) "show" router players & attach it to the router object
router.get('/:index', playerController.show)

// export router module 
module.exports = router 


