const port = 4500;
const io = require('socket.io')(port);

io.on('connection',socket =>{
    console.log('new user')
    socket.emit('chat-message', 'Hello World');
})