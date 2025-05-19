const EventEmitter = require('events');
class ChatApp extends EventEmitter {
  sendMessage(user, message) {
    this.emit('event', { user, message, time: new Date() });
  }
}

const chat = new ChatApp();

chat.on('event', (data) => {
  console.log(` ${data.time.toLocaleTimeString()} - ${data.user}: ${data.message}`);
});

chat.on('event', (data) => {
  console.log(`You have a new message from ${data.user}`);
});

chat.sendMessage('abhik','Hey Bob! Are you coming to the meeting?');
chat.sendMessage('sonu','Yes, I will be there in 10 min');
