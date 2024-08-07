const express = require("express");
const mongoose = require("mongoose");

const PORT = 8000;

//init app
const app = express();

const connectionUrl = "mongodb://localhost:27017/todo";

mongoose
  .connect(connectionUrl)
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.log(error.message));

//view engine
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
    try {
        res.render("index")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//listen server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
