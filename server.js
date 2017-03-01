'use strict';

let http = require('http');
let express = require('express');
let socketio = require('socket.io');

let app = express();
let server = http.createServer(app);
let io = socketio(server);

io.on('connection', onConnection);

app.use(express.static(__dirname + '/client'));

server.listen( process.env.PORT || 8080,() => console.log('Ready to work!'));

function onConnection(sock)
{
  sock.on('msg', (deck) => sock.broadcast.emit('msg',deck))
  }
