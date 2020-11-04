const robot = require("robotjs");
const ioHook = require("iohook");
const coordinatedArray = [];

// Speed up the mouse.
robot.setMouseDelay(2);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = screenSize.height / 2 - 10;
var width = screenSize.width;

ioHook.on("mouseclick", (event) => {
  const { clicls, x, y } = event;
  console.log([x, y]);
  // if (clicls !== 1) return;

  // // coordinatedArray.push([x, y]);
  // console.log([x, y]);
});

ioHook.enableClickPropagation();

// Alternatively, pass true to start in DEBUG mode.
ioHook.start(true);

// for (var x = 0; x < width; x++) {
//   y = height * Math.sin((twoPI * x) / width) + height;
//   robot.moveMouse(x, y);
// }

// const readPosition = () => {
//   const { x, y } = robot.getMousePos();
// };
