const express = require('express');
// const bodyparser = require('body-parser');
// const cors = require('cors');

const createRouter = require('./routers/createRouter');

const PORT = 8000;
const app = express();

//use static files
app.use(express.static('public'));
//middleware
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json());
// app.use(cors());

//Router
app.get("/", (req, res) => {
  res.send("Hello James");
});

app.use("/create", createRouter);

app.listen(PORT, () => {
  console.log("server ok")
})

module.exports = app;