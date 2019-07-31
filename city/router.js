const { Router } = require('express')
const City = require('./model')

const router = new Router()

router.get('/city', (request, response, next) => {
  City.findAll()
    .then(city => response.send(city))
    .catch(err => next(err))
})

router.get('/city/:id', (request, response, next) => {
  City.findByPk(request.params.id)
    .then(city => response.send(city))
    .catch(err => next(err))
})

router.post('/city', (request, response, next) => {
  City.create(request.body)
    .then(city => response.send(city))
    .catch(err => next(err))
})

router.put('/city/:id', (request, response, next) => {
  City.findByPk(request.body)
    .then(city => city.update(request.body))
    .then(city => response.send(city))
    .catch(err => next(err))
})

router.delete('/city/:id', (request, response, next) => {
  City.destroy({
    where : {id : request.params.id}
  })
    .then(number => response.send(number))
    .catch(err => next(err))
})

module.exports = router;