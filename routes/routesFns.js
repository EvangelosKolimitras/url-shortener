const Url = require("../models/urls");
async function postShortenedUrl(req, res) {
	await Url
		.create({ originalUrl: req.body.originalUrl })
	res
		.redirect("/")
}

async function getShortenedUrl(req, res) {
	const sUrl = await Url
		.findOne({ shortenedUrl: req.params.shortenedUrl })
	if (sUrl === null) {
		return res.sendStatus(404)
	}
	sUrl.numberOfClicks++;
	sUrl
		.save()
	res
		.redirect(sUrl.originalUrl)
}

async function getUrls(req, res) {
	const urls = await Url
		.find()
	res
		.render("index", {
			title: "Url-Schinker",
			description: "A simple to use url schortener builded with Node, Express and Mongoose.",
			urls
		})
}
module
	.exports = {
	getUrls,
	getShortenedUrl,
	postShortenedUrl
}