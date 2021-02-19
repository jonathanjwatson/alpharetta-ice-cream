const express = require("express");
const iceCreamController = require("../../controllers/iceCreamController");
const router = express.Router();
const { findAll } = require("../../controllers/iceCreamController");

router.route("/").get(findAll);

module.exports = router;
