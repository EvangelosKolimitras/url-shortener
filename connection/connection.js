const mongoose = require("mongoose");
let CONNECTION_STRING = `mongodb://localhost/${process.env.DB}`
let connection = mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = connection