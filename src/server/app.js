import express from 'express'
import path from 'path'
import HTTP from 'http'
import IO from 'socket.io'
import bodyParser from 'body-parser'

const app = express()
const http = HTTP.Server(app)
const io = IO(http)

app.set('views', 'src/server/views/')
app.set('view engine', 'ejs')

app.use('/public', express.static(path.join(__dirname, '../../dist')))

app.use(bodyParser.json());

io.on('connection', (socket) => {
  console.log('A user connected')
})

app.post('/field', (req, res, next) => {
  io.emit('message', req.body.msg)
})

app.get('/', (req, res, next) => {
  res.render('index')
})

const port = process.env.PORT || 3000

http.listen(port, () => {
  console.log('listening on *:' + port)
})
