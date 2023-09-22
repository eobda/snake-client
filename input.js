const { UP, DOWN, LEFT, RIGHT, SAY } = require("./constants");

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
  switch (key) {
  case "\u0003":
    process.exit();
    break;

  case "w":
    connection.write(UP);
    break;
  case "s":
    connection.write(DOWN);
    break;
  case "a":
    connection.write(LEFT);
    break;
  case "d":
    connection.write(RIGHT);
    break;

  case "i":
    connection.write(SAY + "outta my way");
    break;
  case "j":
    connection.write(SAY + "my bad");
    break;
  case "k":
    connection.write(SAY + "nice move");
    break;
  case "l":
    connection.write(SAY + "ssssssss");
    break;
  }

};

module.exports = {
  setupInput
};