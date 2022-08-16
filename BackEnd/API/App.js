const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("From Api usage");
});

app.listen(2345, function () {
  console.log("App running on port 2345");
});
