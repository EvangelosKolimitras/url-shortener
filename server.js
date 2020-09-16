const express = require('express');
const app = express();
const mongoose = require("mongoose");
let connection = mongoose.connect("mongodb://localhost/urlShortener", { useNewUrlParser: true, useUnifiedTopology: true });
const Url = require("./models/urls");
const portListener = require("./utils/portListener");

app
	.set('view engine', 'ejs')
app
	.use(express.urlencoded({ extended: false }));
app
	.get("/", async (req, res) => {
		const urls = await Url.find()
		res.render("index", {
			title: "Url-Schinker",
			description: "A simple to use url schortener builded with Node, Express and Mongoose.",
			urls
		})
	});
app
	.post("/shortUrls", async (req, res) => {
		await Url.create({ originalUrl: req.body.originalUrl })
		res.redirect("/")
	})

app
	.get("/:shortenedUrl", async (req, res) => {
		const sUrl = await Url.findOne({ shortenedUrl: req.params.shortenedUrl })
		if (sUrl === null) {
			return res.sendStatus(404)
		}
		sUrl.numberOfClicks++;
		sUrl.save()

		res.redirect(sUrl.originalUrl)
	})
app.listen(...portListener(process.env.PORT));