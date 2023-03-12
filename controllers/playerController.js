const players = require('../models/players')

// index callback function 
function index(req, res) {
    res.render('players/Index', {players})
}

// index show function 
function show(req, res) {
    res.render('players/Show', {player: players[req.params.index]})
}

module.exports = {index, show }

