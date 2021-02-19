const express = require("express");
const router = express.Router();
const {
  findAll,
  findByID,
  findReviewsByID,
} = require("../../controllers/iceCreamController");

router.route("/").get(findAll);
router.route("/:id").get(findByID);
router.route("/:id/reviews").get(findReviewsByID);

module.exports = router;
