const router = require("express").Router();
const iceCreamRoutes = require("./iceCreamRoutes");

router.use("/iceCream", iceCreamRoutes);

module.exports = router;