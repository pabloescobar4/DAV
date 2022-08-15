const First = require("./First");
const Second = require("./Second");
const Third = require("./Third");
const { Fourth, FourthVariable } = require("./Fourth");

console.log("consoling Express.js");
console.log(First());
console.log(Second());
console.log(Third.ThirdFunction());
console.log(Third.ThirdVariable);
console.log(Fourth());
console.log(FourthVariable);
