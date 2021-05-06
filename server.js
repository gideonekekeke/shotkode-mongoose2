const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 14440;
const url =
  "mongodb+srv://shotkode:shotkode@cluster0.2kfdg.mongodb.net/shotkodeDB?retryWrites=true&w=majority";

const app = express();

// connecting to the data base

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());
app.use(cors());

app.use("/", require("./MVC/Router"));

app.listen(port, () => {
  console.log("listening on port");
});
