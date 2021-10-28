var express = require("express");
const records = require("../controllers/records.controller.js");
const router = express.Router();

// filter records
router.post("/records/find", records.findAll);
module.exports = router;
