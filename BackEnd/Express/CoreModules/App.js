const EventEmitter = require("events");
const emailVerification = require("./EmailVerification");
const welcomeMail = require("./welcomeMail");

// eventEmitter are the events in Node.js
// eventEmitter.on is a callback function added to the particular file, (it is a Listener)
// eventEmitter.emit is to call the function . it runs the Listener, Fires the Listener
// we can say that when user registers himself we can send him welcome email verification done mail
// then we the user lands to homepage we can trigger a different function and say welcome to homePage
// like that we can call different function according to our necessity

const eventEmitter = new EventEmitter();
const whenUserRegistered = () => {
  eventEmitter.on("userRegistered", emailVerification);

  eventEmitter.emit("userRegistered");
};

const homePage = () => {
  eventEmitter.on("userLandedToHomePage", welcomeMail);
  eventEmitter.emit("userLandedToHomePage", { name: "Abhishek Singh" });
};

eventEmitter.on("Event Called", function () {
  console.log("called the First event");
});
eventEmitter.on("Event Called", function () {
  console.log("called the Second event");
});

whenUserRegistered();
homePage();
eventEmitter.emit("Event Called");
module.exports = eventEmitter;
