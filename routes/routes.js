const express = require('express')
const routes = express.Router();
const { getUrls, getShortenedUrl, postShortenedUrl } = require("./routesFns")

routes
	.get("/", getUrls);
routes
	.get("/:shortenedUrl", getShortenedUrl);
routes
	.post("/shortUrls", postShortenedUrl);

module.exports = routes;