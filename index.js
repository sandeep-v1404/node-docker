const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose
    .connect("mongodb://admin:password@mongo:27017/?authSource=admin")
    .then(() => console.log("Successfully connected to DB"))
    .catch((e) => console.error(e));

app.get("/", (req, res) => {
    res.send("Hello Sandeep");
})
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on PORT ${port}`));