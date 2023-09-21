// Stores the active TCP connection object
let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }

  switch(key) {
    case "w":
      setInterval(() => { connection.write("Move: up") }, 50);
      break;
    case "s":
      setInterval(() => { connection.write("Move: down") }, 50);
      break;
    case "a":
      setInterval(() => { connection.write("Move: left") }, 50);
      break;
    case "d":
      setInterval(() => { connection.write("Move: right") }, 50);
      break;

    case "i":
      connection.write("Say: outta my way");
      break;
    case "j":
      connection.write("Say: my bad");
      break;
    case "k":
      connection.write("Say: nice move");
      break;
    case "l":
      connection.write("Say: ssssssss");
      break;
  }

};

module.exports = {
  setupInput
};