const express = require('express');
require('./connection/connection');
const app = express();
const routes = require("./routes/routes.js")
const portListener = require("./utils/portListener");

app
	.use(express.static(__dirname + '/views'));
app
	.set('view engine', 'ejs')
app
	.use(express.urlencoded({ extended: false }));
app
	.use(routes)
app
	.listen(...portListener(process.env.PORT));