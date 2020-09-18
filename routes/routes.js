const express = require('express')
const routes = express.Router();
const { getUrls, getShortenedUrl, postShortenedUrl, deleteUrls } = require("./routesFns")

routes
	.get("/", getUrls);
routes
	.get("/:shortenedUrl", getShortenedUrl);
routes
	.post("/shortUrls", postShortenedUrl);
routes
	.delete("/deleteUrls", deleteUrls);
module
	.exports = routes;