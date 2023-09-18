const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(__dirname + "/public"));

const server = http.createServer(app);
const PORT = 3000;

app.get("", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/oauth/kakao/redirect", async (req, res) => {
  res.sendFile(__dirname + "/html/kakaoRedirect.html");
  const code = req.query.code;
  try {
    const response = await axios.get(`http://localhost:8080/oauth/kakao/login?code=${code}`);
    const data = response.data;
    alert("로그인 성공: " + data);
  } catch (error) {}
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
