const router = require("express").Router();
const { addVideo, getVideos } = require("../controllers/video");
const { verifyAdmin } = require("../middleware/verifyAdmin");

router.post("/post", verifyAdmin, addVideo);

router.get("/", getVideos);

module.exports = router;
