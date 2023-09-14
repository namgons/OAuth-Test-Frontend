const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app);
const PORT = 3000;

app.get("", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/oauth/kakao/redirect", (req, res) => {
  res.sendFile(__dirname + "/html/kakaoRedirect.html");
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
