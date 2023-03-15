const families = require('../models/families')

// index function/callback function from "app.get('/:index', () =>{})"
function index(req, res){
    console.log(families)
    res.render('families/Index', {families})

}

// show function -- callback function 
function show(req, res){
    res.render('families/Show', {family: families[req.params.index]})
}



module.exports = {index, show} 

