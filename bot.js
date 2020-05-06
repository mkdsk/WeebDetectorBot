const tmi = require('tmi.js');

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: 'WeebDetectorBot',
    password: [removed]
  },
  channels: [ 'masondota2' ]
});

client.connect();
const delay = 8;
var thisMsgTime;
var lastMsgTime = 0;

const pedoEmotes = ['AYAYA', 'momoLewd', 'admiralSmug', 'aniBlush', 
      'YuriCamp', 'ayayaJAM', 'AYAYACOG', 'admiralBaka', 'ABABABABA', 
      'TeeHee', 'AYAYAWeird', 'AYAYAYA']

client.on('message', (channel, tags, message, self) => {
  // Ignore echoed messages.
  if(self) return;

  if(pedoEmotes.some(v => message.trim().includes(v))) {
    thisMsgTime = Math.round(Date.now() / 1000);
    if((thisMsgTime - lastMsgTime) > delay) { // we haven't sent a message in over delay seconds
        client.say(channel, `@${tags.username} PedoBear Clap`);
        lastMsgTime = Math.round(Date.now() / 1000);
    }
  }
});
