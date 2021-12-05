const express = require("express")
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_PORT, MONGO_IP } = require("./config/config");
const app = express()
const postRoute = require("./routes/postRoute")
const userRoute = require("./routes/userRoute")

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectToDB = () => {
    mongoose
        .connect(mongoURL)
        .then(() => console.log("Successfully connected to DB"))
        .catch((e) => {
            console.error(e);
            setTimeout(connectToDB, 5000);
        });
}

connectToDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Sandeep");
});

app.use("/api/posts", postRoute);
app.use("/api/users", userRoute);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on PORT ${port}`));