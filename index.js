const express = require("express")
const mongoose = require("mongoose");
const session = require("express-session");
const redis = require("redis");
let RedisStore = require("connect-redis")(session)
const { MONGO_USER, MONGO_PASSWORD, MONGO_PORT, MONGO_IP, REDIS_URL, REDIS_PORT, SESSION_SECRET } = require("./config/config");

let redisClient = redis.createClient({ host: REDIS_URL, port: REDIS_PORT })

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
app.use(session({
    store: new RedisStore({
        client: redisClient,
    }),
    saveUninitialized: false,
    resave: false,
    secret: SESSION_SECRET,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 30000
    }
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Sandeep");
});

app.use("/api/posts", postRoute);
app.use("/api/users", userRoute);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on PORT ${port}`));