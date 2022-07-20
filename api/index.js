const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const compression = require("compression");
const bodyParser = require("body-parser");
const authRoute = require("./Routes/authRoutes");
const userRoute = require("./Routes/userRoutes");
const movieRoute = require("./Routes/movieRoutes");
const listRoute = require("./Routes/listRoutes");

const cors = require("cors");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    })
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => {
        console.error(err);
    });

// Implement CORS
app.use(cors());
app.options("*", cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(compression());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800, () => {
    console.log("Backend server is running!");
});
