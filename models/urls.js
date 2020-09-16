const mongoose = require('mongoose')
const shortId = require('shortid');
const schema = {
	originalUrl: {
		type: 'string',
		required: true
	},
	shortenedUrl: {
		type: "string",
		required: true,
		default: shortId.generate
	},
	numberOfClicks: {
		type: Number,
		required: true,
		default: 0
	}
}

const UrlSchema = new mongoose.Schema(schema)
const Url = mongoose.model("Url", UrlSchema)

module.exports = Url