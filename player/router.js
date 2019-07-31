const { Router } = require('express')
const Player = require('./model')
const Team = require('../team/model')
const City = require('../city/model')

const router = new Router()

router.get('/player', (request, response, next) => {
  Player.findAll()
    .then(player => response.send(player))
    .catch(err => next(err))
}
)

router.get('/player/:id', (request, response, next) => {
  Player.findByPk(request.params.id, { include: [Team, City] })
    .then(player => response.send(player))
    .catch(err => next(err))
})

router.get('/player/team/:id', (request, response, next) => {
  Player.findAll({
    where: { teamId: request.params.id }
  })
    .then(player => response.send(player))
    .catch(err => next(err))
})

router.get('/player/city/:id', (request, response, next) => {
  Player.findAll({
    where: { cityId: request.params.id }
  })
    .then(player => response.send(player))
    .catch(err => next(err))
})

router.post('/player', (request, response, next) => {
  Player.create(request.body)
    .then(player => response.send(player))
    .catch(err => next(err))
})

router.put('/player/:id', (request, response, next) => {
  Player.findByPk(request.params.id)
    .then(player => player.update(request.body))
    .then(player => response.send(player))
    .catch(err => next(err))
})

router.delete('/player/:id', (request, response, next) => {
  Player.destroy({
    where: { id: request.params.id }
  })
    .then(number => response.send({ number }))
    .catch(err => next(err))
})

module.exports = router