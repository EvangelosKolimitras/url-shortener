const express = require('express');
require('./connection/connection');
const app = express();
const routes = require("./routes/routes.js")
const portListener = require("./utils/portListener");
const favicon = require('serve-favicon')
const path = require('path');

app
	.use(favicon(path.join(__dirname, 'views', 'favicon.ico')))
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