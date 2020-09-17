const express = require('express');
const app = express();
const mongoose = require("mongoose");
let connection = mongoose.connect("mongodb://localhost/urlShortener", { useNewUrlParser: true, useUnifiedTopology: true });
const routes = require("./routes/routes.js")
const portListener = require("./utils/portListener");

app
	.set('view engine', 'ejs')
app
	.use(express.urlencoded({ extended: false }));
app
	.use(routes)
app
	.listen(...portListener(process.env.PORT));