require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const VideoRouter = require("./routers/video");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", VideoRouter);

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log("OK");
		});
	})
	.catch(() => {
		console.log("No");
	});
