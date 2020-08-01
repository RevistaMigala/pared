const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const router = require('./routers')

const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 3000
const public = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../views/partials')

const io = socketio(server)

io.on('connection', (socket) => {
    socket.on('increment', (message) => {
        io.emit('broadcast', message)
    })
})

// Setup view engine
app.set('view engine', 'hbs')
// Setup partials path
hbs.registerPartials(partialsPath)
// Setup directory for static files
app.use(express.static(public))

app.use(bodyParser.json())
app.use(router)

server.listen(port, () => {
    console.log(`🐷 Server is up on port ${port}!`)
})
