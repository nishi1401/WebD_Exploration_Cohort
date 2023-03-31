// A signal that something has happened
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.emit('messageLogged');

