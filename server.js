const express = require("express");
const redirectToHTTPS = require("express-http-to-https").redirectToHTTPS;
const app = express();

// Redirect HTTP to HTTPS,
app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/public/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
