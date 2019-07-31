const { Router } = require('express')
const Team = require('./model')
const City = require('../city/model')

const router = new Router()

router.get('/team', (request, response, next) => {
  Team.findAll()
    .then(teams => response.send(teams))
    .catch(err => next(err))
  }
)

router.get('/team/:id', (request, response, next) => {
  Team.findByPk(request.params.id, { include: [City] })
    .then(team => response.send(team))
    .catch(err => next(err))
})

router.get('/team/city/:id', (request, response, next) => {
  Team.findAll({
    where : {cityId : request.params.id}
  })
    .then(team => response.send(team))
    .catch(err => next(err))
})

router.post('/team', (request, response, next) => {
  Team.create(request.body)
    .then(team => response.send(team))
    .catch(err => next(err))
})

router.put('/team/:id', (request, response, next) => {
  Team.findByPk(request.params.id)
    .then(team => team.update(request.body))
    .then(team => response.send(team))
    .catch(err => next(err))
})

router.delete('/team/:id', (request, response, next) => {
  Team.destroy({
    where : { id : request.params.id}
  })
    .then(number => response.send({ number }))
    .catch(err => next(err))
})

module.exports = router