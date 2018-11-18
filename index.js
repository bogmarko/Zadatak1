var func = require("./functions.js");
var config = require("./config.js");

console.log(func.random(config.min, config.max));
console.log(func.minIntegerFromArray(config.isInArray));
console.log(func.minIntegerFromString(config.someText));
console.log(func.concatStringsByLength(config.type, config.arrayOfString));
