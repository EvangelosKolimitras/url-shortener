const express = require('express')
const Url = require("../models/urls");
const routes = express.Router();

routes
	.get("/", async (req, res) => {
		const urls = await Url.find()
		res.render("index", {
			title: "Url-Schinker",
			description: "A simple to use url schortener builded with Node, Express and Mongoose.",
			urls
		})
	});
routes
	.get("/:shortenedUrl", async (req, res) => {
		const sUrl = await Url.findOne({ shortenedUrl: req.params.shortenedUrl })
		if (sUrl === null) {
			return res.sendStatus(404)
		}
		sUrl.numberOfClicks++;
		sUrl.save()

		res.redirect(sUrl.originalUrl)
	});
routes
	.post("/shortUrls", async (req, res) => {
		await Url.create({ originalUrl: req.body.originalUrl })
		res.redirect("/")
	});

module.exports = routes;