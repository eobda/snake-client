const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  switch(key) {
    case "w":
      console.log("Move: up");
      break;
    case "s":
      console.log("Move: down");
      break;
    case "a":
      console.log("Move: left");
      break;
  }

};

module.exports = {
  setupInput
};