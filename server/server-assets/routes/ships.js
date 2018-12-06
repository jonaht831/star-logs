var router = require('express').Router()
var Ships = require('../models/ship')

//GET ALL
router.get('/api/ships', (req, res, next) => {
  Ships.find({})
    .then(ships => {
      res.status(200).send(ships)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//GET BY ID
router.get('/api/ships/:id', (req, res, next)=>{
  Ships.findById(req.params.id)
    .then(ship =>{
      res.status(200).send(ship)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//ADD
router.post('/api/ships', (req, res, next) => {
  var ship = req.body
  Ships.create(ship)
    .then(newShip => {
      res.status(200).send(newShip)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//EDIT
router.put('/api/ships/:id', (req, res, next) => {
  Ships.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(ship => {
      res.status(200).send({message: "Successfully Updated", ship})
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//DESTROY
router.delete('/api/ships/:id', (req, res, next)=>{
  Ships.findByIdAndRemove(req.params.id)
    .then(data=>{
      res.send("Successfully Deleted Ship")
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = {
  router
}