const { connect } = require('./client');

console.log('Connecting ...');


const HandleUserInput = (std) => {
  std.on('data', data => {
    if (data === '\u0003') {
      console.log("bye bye")
      process.exit();
    }
  })
}


const setUpInput = (callback) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  callback(stdin);
  return stdin
};
connect();

setUpInput(HandleUserInput)




