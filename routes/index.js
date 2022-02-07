const router = require("express").Router();
const travelersRoutes = require("./travelers.js");
const locationsRoutes = require("./locations.js");
const tripsRoutes = require("./trips.js");

router.use("/travelers", travelersRoutes);
router.use("/locations", locationsRoutes);
router.use("/trips", tripsRoutes);

module.exports = router;

