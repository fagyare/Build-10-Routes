// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 7076

//Load data from model?

// Load Routes from Router Folder 
const playerRoutes = require('./routes/playerRoutes')
const familyRoutes = require('./routes/familyRoutes')

// Load the create-engine 
const { createEngine } = require('jsx-view-engine')

app.set('view engine', 'jsx')
app.engine('jsx', createEngine()) 

// Connect Routes to our Express app (app.use)
app.use('/players', playerRoutes)
app.use('/families', familyRoutes)

// Listen to a given port
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})