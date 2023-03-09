const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const createRouter = require('./routers/createRouter');

const PORT = 8000;
const app = express();

//use static files
app.use(express.static('public'));
//middleware
var corsOptions = {
  credentials: true,
  origin: "http://localhost:3000",
  // origin: "https://market-place-backend-vert.vercel.app/",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Router
app.get("/", (req, res) => {
  res.send("Hello James");
});

app.use("/create", createRouter);

app.listen(PORT, () => {
  console.log("server ok")
})

module.exports = app;