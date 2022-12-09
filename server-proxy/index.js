const express = require('express')
const app = express()
const nodefetch = require('node-fetch')
const cors = require('cors')

app.use(cors())

app.get('/drones', async (req, res) => {
  const response = await nodefetch('https://assignments.reaktor.com/birdnest/drones')
  const str = await response.text()
  res.send(str)
})

app.use(express.json())

app.get('/pilots/:serialNumber', async (req, res) => {
  const response = await nodefetch(`https://assignments.reaktor.com/birdnest/pilots/${req.params.serialNumber}`)
  res.json(response.data)
})

app.listen(4000, () => {
  console.log("Listening on port 4000")
})