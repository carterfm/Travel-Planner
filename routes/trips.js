const router = require('express').Router();
const { Trip } = require('../models');

// It's done when the POST route /api/trips creates trip data between associated travelers and locations.
router.post("/", async (req, res) => {
    try {
        const newTrip = await Trip.create({
            trip_budget: req.body.trip_budget,
            traveler_amount: req.body.traveler_amount,
            TravelerId: req.body.TravelerId,
            LocationId: req.body.LocationId
        })
        //If the above doesn't work, it'll throw an error
        res.status(200).json(newTrip);
    } catch (err) {
        res.status(500).json(err);
    }
});

// It's done when the DELETE route /api/trips/:id removes a trip and returns a successful response in Insomnia.
router.delete("/:id", async (req, res) => {
    try {
        const deletedTrip = await Trip.destroy({ where: { id: req.params.id }});
        if (!deletedTrip){
            res.status(404).json({ message: 'No traveler found with that id.' });
            return;
        }
        res.status(200).json(deletedTrip);
    } catch (err) {
        response.status(500).json(err);
    }
});

// It's done when the API is successfully deployed to Heroku with a MySQL database.
module.exports = router;