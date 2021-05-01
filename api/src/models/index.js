const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.host = dbConfig.host;

db.product = require("./product.model");

module.exports = db;
