const express = require('express');
const app = express();
const portListener = require("./utils/portListener");


app.set('view engine', 'ejs')
app.get("/", (req, res) => {
	res.render("index", {
		title: "Url-Schinker",
		description: "A simple to use url schortener builded with Node, Express and Mongoose."
	})
})
app.listen(...portListener.call(process.env.PORT));

