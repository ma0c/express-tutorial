const express = require('express')

const app = express()

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

app.listen(
  3000,
  function()
  {
    console.log('App running in port 3000')
  }
)
