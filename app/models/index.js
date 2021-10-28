const {mongodbConfig} = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {
    mongoose: mongoose,
    url : mongodbConfig.url,
    records: require("./records.model.js")(mongoose)
};

module.exports = db;
