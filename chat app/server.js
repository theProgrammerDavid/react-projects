const port = 4500;
const io = require('socket.io')(port);

const users = {};

io.on('connection', socket => {
    console.log('new user')
    socket.emit('chat-message', 'Hello World');

    socket.on('send-chat-message', message => {
        //console.log(message);
        socket.broadcast.emit('chat-message', { name: users[socket.id], message: message });
    });

    socket.on('disconnect', message => {
        //console.log(message);
        socket.broadcast.emit('user-disconnected',  users[socket.id]);
        delete users[socket.id];
    });

    socket.on('new-user', name => {
        users[socket.id] = name;
        socket.broadcast.emit('new-user', name);
    })
})