function eat(memoryMB) {
  var bytes = 1*1024*1024*memoryMB;
  var buffer = new Buffer.alloc(bytes, 'a');
  buffer = null;
  global.gc();
  console.log('done.');
}

function main(msg) {
    console.log('helloEatMemory', 'memory ' + msg.payload + 'MB');
    eat(msg.payload);
    return {msg: 'OK, buffer of size ' + msg.payload + ' MB has been filled.'};
}
