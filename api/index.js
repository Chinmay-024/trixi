const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

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

app.use(cors({ origin: "*", credentials: true }));

app.use(express.json());

app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next();
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800, () => {
	console.log("Backend server is running!");
});
