const net = require('net');
const {IP,PORT} = require("./constants")

const connect = () => {
  // grab the connection with the server
  let conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as texts
  conn.setEncoding('utf8');

  conn.on('data',(data) => {
    console.log("The game says: ",data)
  })
  conn.on('connect',()=>{
    console.log("Successfully connected to game server");
    
  })


 
  return conn;
}
module.exports.connect = connect