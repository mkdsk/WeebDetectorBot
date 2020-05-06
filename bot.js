const tmi = require('tmi.js');

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: 'WeebDetectorBot',
    password: 'x'
  },
  channels: [ 'masondota2' ]
});

client.connect();
const delay = 8;
var thisMsgTime;
var lastMsgTime = 0;

client.on('message', (channel, tags, message, self) => {
  // Ignore echoed messages.
  if(self) return;

  if(message.trim().includes('AYAYA') || message.trim().includes('momoLewd') || message.trim().includes('admiralSmug') || message.trim().includes('aniBlush') || message.trim().includes('YuriCamp') || message.trim().includes('ayayaJAM') || message.trim().includes('AYAYACOG') || message.trim().includes('admiralBaka') || message.trim().includes('ABABABABA')) {
    thisMsgTime = Math.round(Date.now() / 1000);
    if((thisMsgTime - lastMsgTime) > delay) { // cuz we havent sent a msg in (delay) seconds, so we gud now
        client.say(channel, `@${tags.username} PedoBear Clap`);
        lastMsgTime = Math.round(Date.now() / 1000);
    }
  }
});
