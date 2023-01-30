const verifyAdmin = (req, res, next) => {
	const authHeader = req.headers.authorization;
	const token = authHeader && authHeader.split(" ")[1];

	if (!token)
		return res.status(401).json({ message: "You are not authenticated!!" });

	if (token === "lkjhgfdsa") {
		next();
	} else {
		return res.status(403).json({ message: "Invalid token" });
	}
};

module.exports = { verifyAdmin };
