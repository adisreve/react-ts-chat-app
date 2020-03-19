const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, './build')));

app.get('/', (req, res) => res.sendFile(__dirname + '/build/index.html'));

io.on('connect', (socket) => {
  // Say Hi to all connected clients
  io.emit('broadcast', 'Server: Welcome!');

  socket.on('message', (msg) => {

    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    io.emit('broadcast', 'Server: Goodbye!');
  });
});

const port = process.env.PORT || 3001;
app.set('port', port);

http.listen(port, () => {
  console.log('listening on *:3001');
});