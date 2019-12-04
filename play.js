const net = require('net');
const connect = () => {
  // grab the connection with the server
  let conn = net.createConnection({
    host:"192.168.88.149",
    port: 50541
  });

  // interpret incoming data as texts
  conn.setEncoding('utf8');

  conn.on('data',(data) => {
    console.log("The game says: ",data)
  })

  return conn;
}

console.log("Connecting....");
connect();