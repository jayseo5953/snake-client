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
  conn.on('connect',()=>{
    console.log("Successfully connected to game server");
    conn.write("Name: SJS");
    // conn.write("Move: up");
    // setTimeout(()=>{conn.write('Move: up'),50});
    // setTimeout(()=>{conn.write('Move: right'),100});
    // setInterval(()=>{conn.write("Move: right")},150);
  })


 
  return conn;
}
module.exports.connect = connect