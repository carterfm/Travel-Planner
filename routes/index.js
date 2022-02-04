const express = require("express");
const router = express.Router();
const travelers = require("./travelers.js");
const locations = require("./locations.js");
const trips = require("./trips.js");

router.use("/travelers", travelers);
router.use("/locations", locations);
router.use("/trips", trips);

module.exports = router;

