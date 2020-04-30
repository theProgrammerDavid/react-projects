const socket = io('http://localhost:4500');
const messageForm = document.getElementById('send-container');
messageForm.addEventListener('submit',e=>{
    e.preventDefault();
});
socket.on('chat-message', data=>{
    
    console.log(data);
})