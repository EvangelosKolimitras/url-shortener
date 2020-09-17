const mongoose = require("mongoose");
let connection = mongoose.connect("mongodb://localhost/urlShortener", { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = connection