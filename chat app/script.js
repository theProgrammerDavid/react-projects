const socket = io('http://localhost:4500');
const messageForm = document.getElementById('send-container');
const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');

const name = prompt('what is your name');


appendMessage('you joined');
socket.emit('new-user', name);

messageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('send-chat-message', message);
    messageInput.value = ''
});
socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`);
    console.log(data);

});
socket.on('disconnect', data => {
    appendMessage(`${data.name} disconnected`);
    
});

socket.on('new-user', name => {
    appendMessage(`${name} connected`);
    // console.log(data);

});

function appendMessage(message) {
    var br = document.createElement("br");
    messageContainer.append(br);
    const ele = document.createElement('div');
    ele.innerText = `${message}`;

    messageContainer.append(ele);
    

}