const Video = require("../models/video");

const addVideo = async (req, res) => {
	const data = req.body;

	try {
		const newVideo = new Video(data);
		const result = await newVideo.save();
		return res.status(200).json({ message: "Success" });
	} catch (e) {
		return res.status(400).json({ message: e.message });
	}
};

const getVideos = async (req, res) => {
	try {
		const allVideo = await Video.find();
		return res.status(200).json(allVideo);
	} catch (e) {
		return res.status(400).json({ message: e.message });
	}
};

module.exports = { addVideo, getVideos };
