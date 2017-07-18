const express = require('express')

const app = express()

var birds = require('./birds')

app.get(
  '/',
  function(req, res)
  {
    res.send('GET method');
  }
)

app.post(
  '/',
  function(req, res)
  {
    res.send('POST method')
  }
)

app.put(
  '/',
  function(req, res)
  {
    res.send("PUT method")
  }
)

app.delete(
  '/',
  function(req, res)
  {
    res.send("DELETE method")
  }
)

app.get(
  '/a(bc)?d',
  function(req, res)
  {
    res.send("ab?cd")
  }
)

app.get(
  '/:param1(\\d+)/:param2',
  function(req, res, next)
  {
    // res.send(req.params)
    next()
  },
  function (req, res) {
    res.send("Hello world")
  }
)

app.route('/book')
  .get(function (req, res) {
    console.log(req)
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

app.use('/birds', birds)


app.listen(
  3000,
  function()
  {
    console.log('App running in port 3000')
  }
)
