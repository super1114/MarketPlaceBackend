var app = require("express")();
var createRouter = require("./routers/createRouter");

app.use("/create", createRouter);

module.exports = app;