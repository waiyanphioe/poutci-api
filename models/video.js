const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	image: { type: String, required: true },
	description: { type: String, required: true },
	category: { type: String, required: true },
	pornstars: { type: String, required: true },
	date: { type: String, require: true },
	link: { type: String, require: true },
});

module.exports = mongoose.model("Video", videoSchema);
