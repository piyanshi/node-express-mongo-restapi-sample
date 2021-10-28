const mongoose = require("mongoose");
const app = require("./server");

const db = require("./app/models");

// set port, listen for requests
const PORT = process.env.PORT || 8080;

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the Mongodb.");
        app.listen(PORT, () => {
            console.log(`Starting Restful API server on port ${PORT}.`);
        });
    })
    .catch(err => {
        console.log("Cannot connect to the Mongodb.", err);
        process.exit();
    });
