const express = require('express')

const app = express()

app.use('/static', express.static('public'))

app.listen(
	3000,
	function()
	{
		console.log('App running in port 3000')
	}
)
