const express = require('express')
const app = express()
const nodefetch = require('node-fetch')
const cors = require('cors')

app.use(cors())

app.get('/', async (req, res) => {
  const response = await nodefetch('https://assignments.reaktor.com/birdnest/drones')
  const str = await response.text()
  res.send(str)
})

app.listen(4000, () => {
  console.log("Listening on port 4000")
})