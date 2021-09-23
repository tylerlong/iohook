const ioHook = require('./index');

ioHook.on('mousedown', (event) => {
  console.log(event);
});

ioHook.start();
