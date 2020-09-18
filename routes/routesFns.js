const Url = require("../models/urls");
async function postShortenedUrl(req, res) {
	try {
		await Url
			.create({ originalUrl: req.body.originalUrl })
		res
			.redirect("/")
	} catch (error) {
		console.error(error)
	}
}

async function getShortenedUrl(req, res) {
	try {
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
	} catch (error) {
		console.error(error)
	}
}

async function getUrls(req, res) {
	try {
		const urls = await Url
			.find()
		res
			.render("index", {
				title: "Shrinkme",
				description: "A simple to use url shortener builded with Node, Express and Mongoose.",
				urls
			})
	} catch (error) {
		console.error(error)
	}
}

async function deleteUrls(req, res) {
	try {
		console.log(req.params);
		await Url.deleteMany({}, function (err, result) {
			if (err) {
				res.send(err);
			} else {
				res.send(result);
			}
		});
	} catch (error) {
		console.error(error)
	}
}

module
	.exports = {
	getUrls,
	getShortenedUrl,
	postShortenedUrl,
	deleteUrls
}