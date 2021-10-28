const express = require("express");
const cors = require("cors");
const routes = require("./app/routes/records.routes");

const app = express();
//can set cors options
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Restful API server." });
});

app.use("/api", routes);
module.exports = app;
