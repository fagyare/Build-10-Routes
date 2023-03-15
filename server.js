// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 7076

//Load data from model?

app.use(express.static(__dirname+'/public'));

// Load Routes from Router Folder 
const playerRoutes = require('./routes/playerRoutes')
const familyRoutes = require('./routes/familyRoutes')
const foods = require('./models/foods')
const chelsea = require('./models/chelsea')
const seahawks = require('./models/seahawks')


// Load the create-engine 
const { createEngine } = require('jsx-view-engine')

app.set('view engine', 'jsx')
app.engine('jsx', createEngine()) 

// Connect Routes to our Express app (app.use)
app.use('/players', playerRoutes)
app.use('/families', familyRoutes)

// Setup an "index" route for foods
app.get('/foods', (req, res) => {
    res.send(foods)
})

// Setup a "show" route for foods
app.get('/foods/:index', (req, res) => {
    res.send(foods[req.params.index])
})

// Setup an "index" route for Chelsea FC
app.get('/chelsea', (req, res) => {
    res.send(chelsea)
})

// Setup a "show" route for Chelsea FC 
app.get('/chelsea/:index', (req, res) => {
    res.send(chelsea[req.params.index])
})


// Setup an "index" route for Seahawks 
app.get('/seahawks', (req, res) => {
    res.send(seahawks)
})

// Setup a "show" route for Seahawks  
app.get('/seahawks/:index', (req, res) => {
    res.send(seahawks[req.params.index])
})


// Listen to a given port
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})