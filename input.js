const HandleUserInput = (data) => {
    if (data === '\u0003') {
      console.log("bye bye")
      process.exit();
    }
}


const setUpInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',HandleUserInput)
  return stdin;
};


module.exports = {setUpInput};

