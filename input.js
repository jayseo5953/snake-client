let connection;
// '\u0003'
const HandleUserInput = (data) => {
    if (data === "q") {
      console.log("bye bye")
      process.exit();
    } else if (data === "w"){
      connection.write("Move: up");
    } else if (data === "s"){
      connection.write("Move: down");
    } else if (data === "a"){
      connection.write("Move: left");
    } else if (data === "d"){
      connection.write("Move: right");
    } else if (data === "1"){
      connection.write("Say: Hello");
    } else if (data === "2"){
      connection.write("Say: hahahaha");
    }
}


const setUpInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',HandleUserInput)
  return stdin;
};


module.exports = {setUpInput};

