const express = require("express");

const app = express();

//get api
app.get("/", (request, response) => {
  response.send("Hello Abhi");
});

// this always stays at Last
app.listen(2345, function () {
  console.log("app running on port 2345");
});
