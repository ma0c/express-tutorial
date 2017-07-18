const express = require('express')

const app = express()

var router = express.Router()

var logger = function(req, res, next)
{
  console.log('LOGGED')
  next()
}

var time_middleware = function(req, res, next)
{
  req.time = Date.now()
  next()
}

var my_middleware = require('./my_middleware.js')


app.use(logger)

app.use(time_middleware)

app.use(my_middleware({a:1, b:2}))

app.get(
  '/',
  function(req, res)
  {
    res.send('Hello world, servertime: '+ req.time + 'and params: ' + req.custom_params )
  }
)

router.use(function (req, res, next) {
  if (!req.headers['x-auth']) return next('router')
  next()
})

router.get(
  '/',
  function(req, res)
  {
    res.send('Hello world, servertime: '+ req.time + 'and params: ' + req.custom_params )
  }
)

app.use('/admin', router, function (req, res) {
  res.sendStatus(401)
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(4000)
