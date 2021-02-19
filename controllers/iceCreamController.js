const express = require("express");
const router = express.Router();

// TODO: Proxy the Yelp API request.
router.get("/", (req, res) => {
  res.json({
    iceCream: [],
  });
});

module.exports = router;
